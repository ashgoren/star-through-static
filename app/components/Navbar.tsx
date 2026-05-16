"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-foreground/10">
      <nav className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight">
          Star Through
        </Link>

        <div className="flex items-center gap-2">
          {/* Desktop links */}
          <ul className="hidden md:flex gap-8 text-base">
            {links.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`transition-opacity hover:opacity-100 ${
                    pathname === href ? "opacity-100 font-medium" : "opacity-60"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="md:ml-4">
            <ThemeToggle />
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span
              className={`block h-0.5 w-5 bg-foreground transition-transform origin-center ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-foreground transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-foreground transition-transform origin-center ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-48" : "max-h-0"
        }`}
      >
        <ul className="px-4 pb-4 flex flex-col gap-3 text-sm">
          {links.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className={`transition-opacity hover:opacity-100 ${
                  pathname === href ? "opacity-100 font-medium" : "opacity-60"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </header>
  );
}
