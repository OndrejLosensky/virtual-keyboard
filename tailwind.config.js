/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1280px',
      'bigScreen': '1920px',
    },
    extend: {},
    colors: {
      backColor: "#1f212c",
      foreColorWhite: "#fefefe",
      foreColorBlue: "#96d2f1",
      foreColorRed: "#ec5c5e",
      foreColorOrange: "#ea9b22",
      foreColorGreen: "#44c33c",
      btnbg: "#5f90a0",
      bgRed: "#f40b1f",
      },
  },
  plugins: [],
}