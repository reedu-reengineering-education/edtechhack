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
          DEFAULT: '#545DE6',
          50: '#F4F5FD',
          100: '#E2E4FB',
          200: '#BFC2F6',
          300: '#9BA0F0',
          400: '#787FEB',
          500: '#545DE6',
          600: '#232FDF',
          700: '#1A23B0',
          800: '#13197F',
          900: '#0B104E',
        },
      },
    },
  },
}
