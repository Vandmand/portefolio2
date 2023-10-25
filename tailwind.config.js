export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': {
        '50': '#fef3ff',
        '100': '#fce7ff',
        '200': '#f9ceff',
        '300': '#f8a7ff',
        '400': '#f68cff',
        '500': '#e93ef7',
        '600': '#d01edb',
        '700': '#b115b6',
        '800': '#921395',
        '900': '#791679',
        '950': '#510151',
      },
      'secondary': {
        '50': '#edfdfe',
        '100': '#d2f9fb',
        '200': '#abf0f6',
        '300': '#70e3f0',
        '400': '#2fcce1',
        '500': '#13b0c7',
        '600': '#138ca7',
        '700': '#167188',
        '800': '#1b5c6f',
        '900': '#1b4d5e',
        '950': '#0c3240',
      },
      'neutral': {
        'background': '#070C12',
        'text': '#ffffff'
      }
    },
    fontFamily: {
      'treat' : 'Threat',
      'bdo-grotesk': 'BDO Grotesk'
    },
    fontSize: {
      h1: ['6rem', {lineHeight: '8rem', letterSpacing: '0.5rem'}],
      h2: ['2rem', {lineHeight: '2.5rem', letterSpacing: '0.1rem'}],
      body: ['1.2rem', {lineHeight: '1.5rem', letterSpacing: '0.06rem'}],
      link: ['1.5rem', {lineHeight: '1.5rem', letterSpacing: '0.12rem'}]
    }
  },
  plugins: [],
}