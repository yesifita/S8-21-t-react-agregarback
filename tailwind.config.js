/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],  
  
  theme: {
    extend: {
      colors: {
        colorPrimario:'#070729',
        botonesPrincipales:'#69BA00',
        botonesHover:'#518f01',
        botonesSecundarios: "#473E83",
        blanco: "#FFFFFF",
        bgCARDS: "#F7F7F7",
        negro: "#000000",
        grisTexto: "#616161",
        grisOptions: "#E6E6E6",
        rojo: "#D6142C"
      },
    },
  },
  plugins: [],
}