/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'laranja-primary': '#FF7500',
      'black':'#000000',
      'white':'#FFFFFF',
      'grafite': '#181818'
    },
    
    extend: {
      width:{
        '500': '500px',
        '38': '152px',
        '39': '158px',
        '79':'311px'
      },
      height:{
        '588': '588px',
        '558':'558px',
        '485': '485px',


      },
      maxWidth:{
          '155': '1550px',
          '500': '500px',
          '79':'311px',
      },
      spacing:{
        '88':'33.5rem'
      }
    },
  },
  plugins: [],
}