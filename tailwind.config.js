/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'pokeShadow': '3px 4px 5px rgba(0, 0, 0, 0.9)',
      }
    },
  },
  plugins: [],
}

