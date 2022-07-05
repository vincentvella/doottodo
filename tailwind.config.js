const defaultTheme = require("tailwindcss/defaultTheme")
const theme = require('./src/theme.ts')

const { colors } = theme

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ['Metropolis', ...defaultTheme.fontFamily.sans]
      }
    }
  }
}
