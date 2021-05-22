const { warmGray } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['_site/**/*.html'],
    options: {
      safelist: [],
    },
  },
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      gray: warmGray,
      primary: '#FC0341',
    },
    fontFamily: {
      'sans': ['Nunito', 'sans-serif']
    }
  },
  variants: {},
  plugins: [],
}