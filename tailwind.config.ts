import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#05070f",
        "night-soft": "#0b1022",
        "night-card": "#0f1632",
        "movy-accent": "#7b5cff",
        "movy-accent-2": "#37c1ff",
        "movy-accent-3": "#66ffc2"
      },
      boxShadow: {
        glow: "0 18px 35px rgba(20, 30, 70, 0.35)"
      },
      fontFamily: {
        manrope: ["Manrope", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
} satisfies Config;
