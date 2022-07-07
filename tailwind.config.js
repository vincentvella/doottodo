const defaultTheme = require("tailwindcss/defaultTheme")
const theme = require('./src/theme.js')

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
        ['metropolis-blk']: ['Metropolis-Black'],
        ['metropolis-blk-it']: ['Metropolis-BlackItalic'],
        ['metropolis-bld']: ['Metropolis-Bold'],
        ['metropolis-bld-it']: ['Metropolis-BoldItalic'],
        ['metropolis-x-bld']: ['Metropolis-ExtraBold'],
        ['metropolis-x-bld-it']: ['Metropolis-ExtraBoldItalic'],
        ['metropolis-x-lgt']: ['Metropolis-ExtraLight'],
        ['metropolis-x-lgt-it']: ['Metropolis-ExtraLightItalic'],
        ['metropolis-lgt']: ['Metropolis-Light'],
        ['metropolis-lgt-it']: ['Metropolis-LightItalic'],
        ['metropolis-med']: ['Metropolis-Medium'],
        ['metropolis-med-it']: ['Metropolis-MediumItalic'],
        ['metropolis']: ['Metropolis-Regular'],
        ['metropolis-it']: ['Metropolis-RegularItalic'],
        ['metropolis-semi-bld']: ['Metropolis-SemiBold'],
        ['metropolis-semi-bld-it']: ['Metropolis-SemiBoldItalic'],
        ['metropolis-thin']: ['Metropolis-Thin'],
        ['metropolis-thin-it']: ['Metropolis-ThinItalic'],
      }
    }
  }
}
