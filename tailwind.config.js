/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "box-shadow: 0 0 120px rgb(143, 51, 121, 0.8);",
        inner: "box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
      },
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

