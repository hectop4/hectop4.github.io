/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.{html,js}",
    "./pages/**/*.{html,js}",
    "./assets/**/*.{html,js}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
    },
    extend: {},
  },
  plugins: [],
};
