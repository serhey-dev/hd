/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Comfortaa"'],
        serif: ['"Caveat"'],
      },
    },
    colors: {
      green: {
        DEFAULT: '#427549',
        light: '#cbdfd2',
      },
      white: {
        DEFAULT: '#fff',
      },
      gray: {
        DEFAULT: 'gray',
      },
      blue: {
        DEFAULT: 'blue',
      },
      red: {
        DEFAULT: '#ae413a',
        light: '#efb5b5',
        error: 'red',
      },
      black: {
        DEFAULT: '#0a0e0a',
      },
      yellow: {
        DEFAULT: 'yellow',
      },
    },
  },
  plugins: [],
};
