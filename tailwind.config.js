/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],  
  
  theme: {
    extend: {
      colors: {
        primaryBlueDark: '#070729',
        primaryGreen : '#69BA00',
        secundaryGreyLight: '#F7F7F7',
        secundaryGreyLight2: '#E6E6E6',
        secundaryViolet: '#473E83',
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
    },
  },
  plugins: [],
}