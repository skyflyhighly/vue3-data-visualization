/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'indian-red': '#CD5C5C',
        'medium-green': '#3CB371'
      },
    },
  },
  plugins: [],
}

