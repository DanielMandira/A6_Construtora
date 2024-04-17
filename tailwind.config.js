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
      maxWidth:{
          '160': '1650px',
      }
    },
  },
  plugins: [],
}