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
        mercury: {
          DEFAULT: '#E5E5E5',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#F9F9F9',
          500: '#E5E5E5',
          600: '#C9C9C9',
          700: '#ADADAD',
          800: '#919191',
          900: '#757575',
        },
        'royal-blue': {
          DEFAULT: '#106ECC',
          50: '#9CCAF7',
          100: '#89C0F6',
          200: '#64ABF3',
          300: '#3E97F0',
          400: '#1882ED',
          500: '#106ECC',
          600: '#0C5298',
          700: '#083664',
          800: '#041A30',
          900: '#000000',
        },
      },
    },
  },
}
