/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        pop: "pop 0.3s ease-in-out forward",
      },
      keyframes: {
        pop: {
          "0%, 100%": { transform: "scale(1)" },
          "20%": { transform: "scale(1.5)" },
        },
      },
      fontFamily: {
        sans: ["var(--font-open-sans)"],
        mono: ["var(--font-roboto-mono)"],
      },
    },
  },
  plugins: [],
};
