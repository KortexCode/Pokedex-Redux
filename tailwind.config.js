/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'detailShadow': 'rgba(0, 0, 0, 0.288)',
        'navBg': 'rgba(127, 29, 29, 1)'
      },
      boxShadow: {
        'pokeShadow': '0px 0px 7px rgba(0, 0, 0, 0.99)',
        'pokeShadowNav': '3px 3px 4px rgba(127, 29, 29 , 0.8)',
        'pokeShadowRed': '3px 4px 5px rgba(245, 25, 0, 1)',
      },
      gridTemplateColumns: {
        'pokeNav': 'auto 1fr auto',
      },
      gridTemplateRows: {
        'pokeCard': '1fr, auto, 40px',
      }
    },
  },
  plugins: [],
}
/* repeat(1, minmax(auto, 200px)) */
