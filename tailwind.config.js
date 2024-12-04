/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'pt-sans': ['"PT Sans"', 'sans-serif'], // Add PT Sans here
      },
      colors: {
        dark: {
          DEFAULT: '#0a0a0f',
          50: '#13131f',
          100: '#1c1c2e',
          200: '#252538',
          300: '#2e2e42',
          400: '#37374d',
          500: '#404057',
          600: '#494962',
          700: '#52526c',
          800: '#5b5b77',
          900: '#646481',
        },
      },
    },
  },
  plugins: [],
};