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
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        brand: {
          primary: "var(--color-brand-primary)",
          "primary-hover": "var(--color-brand-primary-hover)",
          secondary: "var(--color-brand-secondary)",
          soft: "var(--color-brand-soft)",
        },
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)",
        tech: "var(--color-category-tech)",
        culture: "var(--color-category-culture)",
        sports: "var(--color-category-sports)",
        workshop: "var(--color-category-workshop)",
        gaming: "var(--color-category-gaming)",
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
