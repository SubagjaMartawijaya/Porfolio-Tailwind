/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '3px'
    },
    extend: {
      colors: {
        primary: '#06b6d4',
        secondary: '#64748b',
        third: '#083344',
        dark: '#020617'
      },
      screens: {
        '2xl':'1320px',
      },
    },
  },
  plugins: [],
};



