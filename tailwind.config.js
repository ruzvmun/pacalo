/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8eef5',
          100: '#c5d4e5',
          200: '#9eb7d3',
          300: '#7799c1',
          400: '#5983b4',
          500: '#3c6da7',
          600: '#36639f',
          700: '#2e5696',
          800: '#27498c',
          900: '#1a347c',
        },
        accent: {
          50: '#f9f7ed',
          100: '#f1ecd6',
          200: '#e5dbb0',
          300: '#d6c889',
          400: '#c7b562',
          500: '#b8a23b',
          600: '#a08a32',
          700: '#887229',
          800: '#705a20',
          900: '#584217',
        },
        'pacalo-blue': '#0f3664f2',
        'pacalo-gold': '#f2ba14',
        'pacalo-teal': '#A0ECE6',
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
      },
      fontFamily: {
        'roboto': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}