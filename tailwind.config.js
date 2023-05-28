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
        primary_green:' #69BA00',
        skyblue:'#008BEA',
      },
      spacing: {
        87: '87px',
        134:'134px',
        182:"182px",
        199:'199px',
        253: '253px',
        325:'325px',
        327: '327px',
        505:'505px',
      },
      fontSize: {
        xxs: '10px',
      },
    },
  },
  plugins: [],
}
