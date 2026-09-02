import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cyberBg: "#020617",
        cyberBlue: "#38bdf8",
        cyberPurple: "#a855f7",
        cyberCyan: "#22d3ee"
      },
      boxShadow: {
        glow: "0 0 40px rgba(56, 189, 248, 0.6)",
        "glow-purple": "0 0 40px rgba(168, 85, 247, 0.7)"
      },
      backgroundImage: {
        "grid-cyber":
          "linear-gradient(to right, rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.08) 1px, transparent 1px)"
      },
      backgroundSize: {
        "grid-cyber": "32px 32px"
      }
    }
  },
  plugins: []
};

export default config;

