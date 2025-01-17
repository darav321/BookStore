/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : { 
        'primary' : '#65CCB8',
        'secondary' : '#1F2833',
      },
      fontFamily : {
        'primary' : ["Nunito Sans", "sans-serif"],
        'secondary' : ["Montserrat", "sans-serif"]

      }
    },
  },
  plugins: [],
}