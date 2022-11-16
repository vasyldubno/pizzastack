/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ["./src/**/*.{ts,tsx}","./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        main: []
      }
    },
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        '.btn-primary': {
          backgroundColor: theme('colors.orange.500'),
          padding: '10px 0',
        },
      });
    }),],
}
