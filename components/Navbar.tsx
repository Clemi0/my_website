"use client";

import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav-blur sticky top-0 z-50">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-neon-cyan shadow-glow-cyan" />
          <span className="text-sm font-semibold tracking-[0.3em] text-neon-cyan">
            CLEMENTINE
          </span>
        </a>
        <button
          className="rounded-lg border border-white/10 px-3 py-2 text-xs uppercase tracking-widest text-white/80 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          Menu
        </button>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 transition hover:text-neon-cyan"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-ripple rounded-full border border-neon-purple/40 bg-neon-purple/20 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white shadow-glow transition hover:-translate-y-0.5 hover:shadow-glow"
          >
            Let&apos;s Connect
          </a>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-night/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-white/70 transition hover:text-neon-cyan"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-ripple rounded-full border border-neon-purple/40 bg-neon-purple/20 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white shadow-glow"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
