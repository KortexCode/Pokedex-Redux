/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'detailShadow': 'rgba(0, 0, 0, 0.288)',
      },
      boxShadow: {
        'pokeShadow': '3px 4px 5px rgba(0, 0, 0, 0.9)',
        'pokeShadowNav': '3px 3px 4px rgba(127, 29, 29 , 0.8)',
        'pokeShadowRed': '3px 4px 5px rgba(245, 25, 0, 1)',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        'pokeNav': 'repeat(2, minmax(0, auto))',
      }
    },
  },
  plugins: [],
}

