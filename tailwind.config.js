/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        iceberg : ['Iceberg', "cursive"],
        inter : ['Inter', "sans-serif"],
        lato : ['Lato', "sans-serif"],
        roboto : ['Roboto Condensed', "sans-serif"],
      },
      colors: {
        primary: "#4B3B89",
        secondary: "#F3C4CD",
        accent: "#2E003A",
      },
    },
  },
  plugins: [],
};

