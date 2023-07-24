/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primaryBackground: "#212222",
        secondaryBackground: "#2f3030",
        primary: "#e0a80d",
        greyDark: "#7d8792",
        headingColor: "#2d2e2e",
        white: "#fff",
        black: "#000",
        sliver: "#bac8d3",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
