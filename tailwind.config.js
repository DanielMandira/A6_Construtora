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
        '414': '414px',
        '847':'847px',
        '311':'311px',
        '706': '706px',
        '640':'640px',
        '406':'406px',


      },
      height: {
        '588': '588px',
        '558': '558px',
        '485': '485px',
        '450': '450px',
        '642': '642px',
        '749': '749px',
        '433':'433px',
        '520':'520px',
        '191':'191px',
        '741': '741px',
        '481':'481px',
        '393':'393px',
        '316':'316px',
        '642':'642px',
        '316':'316px',



      },
      maxWidth: {
        '155': '1650px',
        '500': '500px',
        '79': '311px',
        '847':'847px',

      },
      spacing: {
        '82':'27rem',
        '88': '33.5rem',
        '97': '40.5rem',
        '100': '29.8rem',
        '26': '6.5rem',
        '66': '16.5rem'
      }
    },
  },
  plugins: [],
}