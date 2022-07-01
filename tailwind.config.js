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
        light: '#F8F8F8',
        dark: '#171717',
      },
      fontFamily: {
        sans: ['Metropolis', ...defaultTheme.fontFamily.sans]
      }
    }
  }
}
