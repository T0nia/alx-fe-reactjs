/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'media', // or 'class' if you want to enable dark mode manually
  theme: {
    extend: {},
  },
  variants: [],
}