/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['node_modules/preline/dist/*.js',],
  theme: {
      extend: {
      colors: {
          'primary': '#e2aea0',
          'secondary': '#cdada0',
          'dark': '#6f6355',
      }
      },
  },
  plugins: [
      require('preline/plugin'),
  ],
}

