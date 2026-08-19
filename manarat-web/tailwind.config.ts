import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./features/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        deep: "#0F1B2D",
        panel: "#16233A",
        "panel-soft": "#1C2C46",
        border: "#26374F",
        beacon: "#E8A94C",
        "beacon-soft": "#F2C878",
        ink: "#F2F0EA",
        muted: "#93A1B8",
      },
      fontFamily: {
        display: ["var(--font-tajawal)", "sans-serif"],
        body: ["var(--font-plex-arabic)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        sweep: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        sweep: "sweep 14s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
