/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        gradiente1:'#1E1E1E',
        boton:'#2336DB',
      }
    },
  },
  plugins: [],
}