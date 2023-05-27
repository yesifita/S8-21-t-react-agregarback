/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],  
  
  theme: {
    extend: {
      colors: {
        gradiente1:'#1E1E1E',
        boton:'#2336DB',
        blanco: "#f0f0f0",
        celeste: "#0077c0",
        celesteCard: "#F2F6FF",
        azul: "#0022aa",
        negroClaro: "#161616",
        negroOscuro: "#0e0e0e",
        grisClaro: "#dfdddd",
        grisOscuro: "#636262",
      },
      spacing: {
        87:'87px'
      },
      fontSize: {
        xxs:'10px'
      }
    },
  },
  plugins: [],
}