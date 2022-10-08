/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 2px 4px rgba(0, 0, 0, 0.25)'
      },
      fontFamily: {
        'roboto' : 'https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap'
      },
      colors: {
        'light-gray': '#666666'
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}
