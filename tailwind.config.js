/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'laranja-primary': '#FF7500',
      'black': '#000000',
      'white': '#FFFFFF',
      'grafite': '#181818',
      'cinza': '#494949',
      'transparente': '#00000000'
    },

    extend: {
      width: {
        '500': '500px',
        '38': '152px',
        '39': '158px',
        '79': '311px',
        '414': '414px'
      },
      height: {
        '588': '588px',
        '558': '558px',
        '485': '485px',
        '450': '450px',
        '642': '642px',
        '749': '749px'


      },
      maxWidth: {
        '155': '1550px',
        '500': '500px',
        '79': '311px',
      },
      spacing: {
        '88': '33.5rem',
        '100': '29.8rem',
        '26': '6.5rem',
        '66': '16.5rem'
      }
    },
  },
  plugins: [],
}