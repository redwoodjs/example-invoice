const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: defaultTheme.colors.orange,
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
}
