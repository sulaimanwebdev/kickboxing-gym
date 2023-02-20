/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3sm': '430px',
        '2sm': '530px',
        '2md': '800px',

      }
    },
  },
  plugins: [],
}
