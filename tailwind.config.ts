import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--rgb-bg) / <alpha-value>)",
        surface: "rgb(var(--rgb-surface) / <alpha-value>)",
        border: "rgb(var(--rgb-border) / <alpha-value>)",
        primary: "rgb(var(--rgb-text-primary) / <alpha-value>)",
        secondary: "rgb(var(--rgb-text-secondary) / <alpha-value>)",
        brand: {
          primary: "rgb(var(--rgb-brand-primary) / <alpha-value>)",
          "primary-hover": "rgb(var(--rgb-brand-primary-hover) / <alpha-value>)",
          secondary: "rgb(var(--rgb-brand-secondary) / <alpha-value>)",
          soft: "rgb(var(--rgb-brand-soft) / <alpha-value>)",
        },
        success: "rgb(var(--rgb-success) / <alpha-value>)",
        warning: "rgb(var(--rgb-warning) / <alpha-value>)",
        danger: "rgb(var(--rgb-danger) / <alpha-value>)",
        tech: "rgb(var(--rgb-tech) / <alpha-value>)",
        culture: "rgb(var(--rgb-culture) / <alpha-value>)",
        sports: "rgb(var(--rgb-sports) / <alpha-value>)",
        workshop: "rgb(var(--rgb-workshop) / <alpha-value>)",
        gaming: "rgb(var(--rgb-gaming) / <alpha-value>)",
      },
      opacity: {
        16: "0.16",
        24: "0.24",
        54: "0.54",
        64: "0.64",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "Arial", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      spacing: {
        18: "4.5rem",
        24: "6rem",
        32: "8rem",
      },
      boxShadow: {
        card: "0 2px 12px rgba(45, 122, 79, 0.07)",
        "card-hover": "0 4px 20px rgba(45, 122, 79, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
