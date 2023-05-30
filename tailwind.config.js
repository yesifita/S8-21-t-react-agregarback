/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        gradiente1: '#1E1E1E',
        boton: '#2336DB',
        secondary: '#666565',
        secondary_grey: '#F7F7F7',
        primary: '#070729',       
        skyblue:'#008BEA',
        colorPrimario:'#070729',
        botonesPrincipales:'#69BA00',
        botonesHover:'#518f01',
        botonesSecundarios: "#473E83",       
        grisTexto: "#616161",
        grisOptions: "#E6E6E6",
        rojo: "#D6142C"
      },
      spacing: {
        84:'84px',
        87: '87px',
        134:'134px',
        182:"182px",
        199:'199px',
        253: '253px',
        325:'325px',
        327: '327px',
        360:'360px',
        450:'450px',
        505:'505px',
      },
      fontSize: {
        xxs: '10px',
      },
      backgroundSize: {
        25:'25%'
      }
    },
  },
  plugins: [],
}
