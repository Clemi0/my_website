"use client";

import { useState } from "react";

export default function ContactForm() {
  const [showToast, setShowToast] = useState(false);

  // Client-side toast for the demo form.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowToast(true);
    window.setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit}
        className="glass-card glow-border space-y-4 rounded-2xl p-6"
      >
        <div>
          <label className="text-xs uppercase tracking-[0.25em] text-white/60">
            Name
          </label>
          <input
            required
            type="text"
            placeholder="Your name"
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-neon-cyan/70 focus:ring-2 focus:ring-neon-cyan/30"
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-[0.25em] text-white/60">
            Email
          </label>
          <input
            required
            type="email"
            placeholder="you@email.com"
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-neon-cyan/70 focus:ring-2 focus:ring-neon-cyan/30"
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-[0.25em] text-white/60">
            Message
          </label>
          <textarea
            required
            rows={4}
            placeholder="Say hello..."
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-neon-cyan/70 focus:ring-2 focus:ring-neon-cyan/30"
          />
        </div>
        <button
          type="submit"
          className="btn-ripple group relative w-full overflow-hidden rounded-full border border-neon-purple/40 bg-neon-purple/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-glow transition hover:-translate-y-0.5 hover:shadow-glow"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-neon-purple/30 via-neon-cyan/20 to-transparent opacity-0 transition group-hover:opacity-100" />
          <span className="relative">Send Message</span>
        </button>
      </form>
      {showToast && (
        <div className="absolute -top-12 right-0 rounded-full border border-neon-cyan/40 bg-night px-4 py-2 text-xs uppercase tracking-[0.2em] text-neon-cyan shadow-glow-cyan">
          Thanks!
        </div>
      )}
    </div>
  );
}
