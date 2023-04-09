/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'pokeShadow': '3px 4px 5px rgba(0, 0, 0, 0.9)',
        'pokeShadowRed': '3px 4px 5px rgba(245, 25, 0, 1)',
      }
    },
  },
  plugins: [],
}

