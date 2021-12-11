const colors = require("tailwindcss/colors");

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'orange': {
          400: '#ff9c3e',
          500: '#FF8000'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
