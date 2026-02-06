import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "neon-purple": "#7c3aed",
        "neon-cyan": "#22d3ee",
        "night": "#05060b",
        "glass": "rgba(255, 255, 255, 0.08)",
      },
      boxShadow: {
        glow: "0 0 30px rgba(124, 58, 237, 0.35)",
        "glow-cyan": "0 0 30px rgba(34, 211, 238, 0.35)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: "0.4" },
          "100%": { transform: "scale(2.6)", opacity: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 10s linear infinite",
        ripple: "ripple 0.6s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
