/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'rosso': {
          light: "#F50000",
          DEFAULT: "#D00000",
          dark: "#CC0000",
        },
        'dark-jungle': {
          light: "#2D392F",
          DEFAULT: "#212922",
          dark: "#1B221C"
        },
        'cultured': {
          light: "#FFFFFF",
          DEFAULT: "#F5F5F5",
          dark: "#EBEBEB",
        }
      },
      fontFamily: {
        offside: ["Offside", "cursive"]
      }
    },
  },
  plugins: [],
}
