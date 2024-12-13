import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkPurple: '#242038',  // Dark Purple
        amethyst: '#9067C6',    // Amethyst
        tropicalIndigo: '#8D86C9', // Tropical Indigo
        frenchGray: '#CAC4CE',  // French Gray
        linen: '#F7ECE1',       // Linen
        primary: {
          600: '#9067C6',       // Primary color for buttons, etc.
          700: '#7E4BB3',       // Darker shade for hover
          800: '#6B2FA0',       // Even darker shade for focus
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
