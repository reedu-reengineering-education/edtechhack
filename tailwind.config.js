const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        mango: {
          DEFAULT: '#FFCE52',
          50: '#FFFFFF',
          100: '#FFFCF5',
          200: '#FFF1CC',
          300: '#FFE5A3',
          400: '#FFD97A',
          500: '#FFCE52',
          600: '#FFBE1A',
          700: '#E0A100',
          800: '#A87900',
          900: '#705000',
        },
      },
    },
  },
}
