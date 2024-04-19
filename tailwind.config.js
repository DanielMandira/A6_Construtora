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
      'white':'#FFFFFF'
    },
    
    extend: {
      width:{
        '500': '500px' 
      },
      maxWidth:{
          '155': '1550px',
          '500': '500px'
      }
    },
  },
  plugins: [],
}