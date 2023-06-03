/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gradiente: '#4F36F4',
        secondary: '#666565',
        skyblue: '#008BEA',       
        botonesHover: '#518f01',     
        grisTexto: '#616161',       
        rojo: '#D6142C',
        primaryBlueDark: '#070729',
        primaryGreen: '#69BA00',
        secundaryGreyLight: '#F7F7F7',
        secundaryGreyLight2: '#E6E6E6',
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
        botonInicio:'#2E77EC'
      },
      fontFamily: {
primaria:['Inter', 'sans-serif']
      },
      spacing: {
        72:'72px',
        84: '84px',
        87: '87px',
        134: '134px',
        182: '182px',
        199: '199px',
        253: '253px',
        325: '325px',
        327: '327px',
        360: '360px',
        375:'375px',
        404:'404px',
        450: '450px',
        505: '505px',
        609:'609px',
        662:'662px',
        673:'673px'
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
