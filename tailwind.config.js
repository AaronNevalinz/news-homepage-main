/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*{html, js}'
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          100:'hsl(35, 77%, 62%)',
          200:'hsl(5, 85%, 63%)'
        },
        secondary:{
          100:'hsl(36, 100%, 99%)',
          200:'hsl(233, 8%, 79%)',
          300:'hsl(236, 13%, 42%)',
          400:'hsl(240, 100%, 5%)'
        }
    },
  },
  plugins: [],
}
}