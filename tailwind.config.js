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
        '544': '544px' 
      },
      maxWidth:{
          '165': '1650px',
          '544': '544px'
      }
    },
  },
  plugins: [],
}