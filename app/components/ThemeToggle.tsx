"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Moon, Sun, SunMoon } from "lucide-react";

type Theme = "auto" | "light" | "dark";
const cycle: Theme[] = ["auto", "light", "dark"];

const icons: Record<Theme, React.ReactNode> = {
  auto: <SunMoon size={18} aria-hidden />,
  light: <Sun size={18} aria-hidden />,
  dark: <Moon size={18} aria-hidden />,
};

const THEME_EVENT = "theme-change";

function getSnapshot(): Theme {
  const stored = localStorage.getItem("theme");
  return stored === "light" || stored === "dark" ? stored : "auto";
}

function subscribe(callback: () => void) {
  window.addEventListener(THEME_EVENT, callback); // monitor custom event for theme changes within the same tab
  window.addEventListener("storage", callback); // monitor localstorage to catch theme changes from other tabs
  return () => {
    window.removeEventListener(THEME_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function writeTheme(theme: Theme) {
  if (theme === "auto") {
    localStorage.removeItem("theme");
  } else {
    localStorage.setItem("theme", theme);
  }
  window.dispatchEvent(new Event(THEME_EVENT));
}

function resolveDataTheme(theme: Theme): "dark" | "light" {
  if (theme !== "auto") return theme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeToggle() {
  const getServerSnapshot = (): Theme => "auto"; // During SSR, we can't access localStorage, so we return a default value
  const theme = useSyncExternalStore<Theme>(subscribe, getSnapshot, getServerSnapshot);

  // Update the data-theme attribute on the document element whenever the theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", resolveDataTheme(theme));
  }, [theme]);

  // If the theme is set to "auto", we also need to listen for changes in the user's system preference
  useEffect(() => {
    if (theme !== "auto") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      document.documentElement.setAttribute("data-theme", resolveDataTheme("auto"));
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [theme]);

  function toggle() {
    writeTheme(cycle[(cycle.indexOf(theme) + 1) % cycle.length]);
  }

  return (
    <button
      onClick={toggle}
      aria-label={`Theme: ${theme} — click to cycle`}
      title={`Theme: ${theme}`}
      className="opacity-60 hover:opacity-100 transition-opacity p-1 w-9 h-9 flex items-center justify-center"
    >
      {icons[theme]}
    </button>
  );
}
