import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./types/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: "#020617",
        },
        brand: {
          red: {
            300: "#fca5a5",
            400: "#f87171",
            500: "#ef4444",
            700: "#b91c1c",
          },
          cyan: {
            200: "#a5f3fc",
            300: "#67e8f9",
            400: "#22d3ee",
          },
        },
      },
      fontFamily: {
        body: ["var(--font-body)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
      },
      backgroundImage: {
        "grid-slate":
          "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-slate": "42px 42px",
      },
    },
  },
  plugins: [],
};

export default config;
