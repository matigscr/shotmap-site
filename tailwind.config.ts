import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05070b",
        charcoal: "#0c111a",
        panel: "rgba(16, 23, 36, 0.72)",
        line: "rgba(148, 163, 184, 0.18)",
        electric: "#2f8cff"
      },
      boxShadow: {
        cinematic: "0 24px 90px rgba(0, 0, 0, 0.48)",
        glow: "0 0 70px rgba(47, 140, 255, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
