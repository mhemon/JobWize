/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-img' : "url('../jobwise/src/assets/All Images/Vector.png')"
      }
    },
  },
  plugins: [],
}