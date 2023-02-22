/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '4sm': '350px',
        '3sm': '430px',
        '4sm': '582px',
        '2sm': '530px',
        '4md': '724px',
        '3md': '892px',
        '2md': '800px',
        '3lg': '1218px',

      }
    },
  },
  plugins: [],
}
