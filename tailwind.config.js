const defaultTheme = require("tailwindcss/defaultTheme")


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: '#FCAB40',
        primary: '#40C7FC',
        secondary: '#B740FC',
        text: '#F8F8F8',
        textLight: '#F8F8F8',
        textDark: '#171717',
        background: '#171717'
      },
      fontFamily: {
        sans: ['Metropolis', ...defaultTheme.fontFamily.sans]
      }
    }
  }
}
