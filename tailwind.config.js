/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gradiente1: '#1E1E1E',
        secondary: '#666565',
        skyblue: '#008BEA',       
        botonesHover: '#518f01',     
        grisTexto: '#616161',       
        rojo: '#D6142C',
        primaryBlueDark: '#070729',
        primaryBlueDarkHover: '#1a1a52',
        primaryGreen: '#69BA00',
        secundaryGreyLight: '#F7F7F7',
        secundaryGreyLight2: '#E6E6E6',
        secundaryGreyLight3: '#EFEFEF',
        secundaryViolet: '#473E83',
        boton: '#2336DB',
        blanco: '#f0f0f0',
        celeste: '#0077c0',
        celesteCard: '#F2F6FF',
        azul: '#0022aa',
        negroClaro: '#161616',
        negroOscuro: '#0e0e0e',
        grisClaro: '#dfdddd',
        grisOscuro: '#636262',
      },
      spacing: {
        84: '84px',
        87: '87px',
        134: '134px',
        182: '182px',
        199: '199px',
        253: '253px',
        325: '325px',
        327: '327px',
        360: '360px',
        450: '450px',
        505: '505px',
      },
      fontSize: {
        xxs: '10px',
      },
      backgroundSize: {
        25: '25%',
      },
      backgroundImage: {
        upload:"./src/assets/icons/upload_img.svg"
    }},
  },
  plugins: [],
};
