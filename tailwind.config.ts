import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      colors: {
        brand: {
          neon: "#EA580C",
          light: "#D97706",
          lime: "#F59E0B",
          gold: "#FBBF24",
          saffron: "#EA580C",
          maroon: "#7C2D12",
          icy: "#FFFDF7",
          cream: "#FFFDF5",
          parchment: "#FEF9EE",
          dark: "#1C0B02",
        },
        iks: {
          saffron: "#EA580C",
          gold: "#FBBF24",
          amber: "#F59E0B",
          yellow: "#EAB308",
          warmcream: "#FFFDF5",
          parchment: "#FEF9EE",
          terracotta: "#C2410C",
          temple: "#1C0B02",
          deepmahogany: "#2E1104",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          lg: "80px",
        },
      },
    },
  },
  plugins: [],
};

export default config;
