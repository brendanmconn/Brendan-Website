const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['app/**/*.{js,ts,tsx}','components/**/*.{js,ts,tsx}',],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        homepageIcon: "#225da5",
        accent: "#3670ee"
      },
      zIndex: {
        '-10': '-10',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
