"use client";

import { useActionState, useState } from "react";
import { submitInterest } from "../actions/submitInterest";

const inputCls =
  "w-full border border-foreground/20 rounded-md px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-foreground/30 text-sm";

export default function InterestForm() {
  const [state, action, pending] = useActionState(submitInterest, null);
  const [wantsToHelp, setWantsToHelp] = useState(false);

  if (state && "success" in state) {
    return (
      <p className="text-foreground/70">
        You&rsquo;re on the list! We&rsquo;ll keep you informed.
      </p>
    );
  }

  return (
    <form action={action} className="space-y-5">
      <div className="space-y-1.5">
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          autoFocus
          className={inputCls}
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="email" className="block text-sm font-medium">
          Email{" "}
          <span className="text-foreground/50 font-normal">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputCls}
        />
      </div>

      <div className="space-y-3">
        <label className="flex items-center gap-2.5 cursor-pointer select-none">
          <input
            type="checkbox"
            name="wantsToHelp"
            checked={wantsToHelp}
            onChange={(e) => setWantsToHelp(e.target.checked)}
            className="w-4 h-4 accent-foreground"
          />
          <span className="text-sm">I&rsquo;m interested in helping out</span>
        </label>

        {wantsToHelp && (
          <textarea
            name="helpDetails"
            rows={4}
            placeholder="In what ways? We'll have more specifics about what we need as we get closer to the event."
            className={`${inputCls} resize-none`}
          />
        )}
      </div>

      {state && "error" in state && (
        <p className="text-sm text-red-500">{state.error}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full py-2 px-4 bg-foreground text-background rounded-md text-sm font-medium hover:opacity-80 transition-opacity disabled:opacity-40 cursor-pointer"
      >
        {pending ? "Submitting…" : "Sign me up"}
      </button>
    </form>
  );
}
