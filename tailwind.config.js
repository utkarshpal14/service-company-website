/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F7931E",
        dark: "#0B0B0B",
        darkCard: "#161616",
        lightText: "#CFCFCF",
      },
    },
  },
  plugins: [],
};
