/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif']
      },
      colors: {
        'primary': '#5E7BE0',
        'primary-light': '#7089E3',
        'secondary': '#C4E9F6'
      }
    },
  },
  plugins: [],
}