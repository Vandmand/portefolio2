export default {
  plugins: [require('daisyui')],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondary-50': 'var(--secondary-50)',
        'secondary-100': 'var(--secondary-100)',
        'secondary-200': 'var(--secondary-200)',
        'secondary-300': 'var(--secondary-300)',
        'secondary-400': 'var(--secondary-400)',
        'secondary-500': 'var(--secondary-500)',
        'secondary-600': 'var(--secondary-600)',
        'secondary-700': 'var(--secondary-700)',
        'secondary-800': 'var(--secondary-800)',
        'secondary-900': 'var(--secondary-900)',
        'secondary-950': 'var(--secondary-950)',

        'primary-50': 'var(--primary-50)',
        'primary-100': 'var(--primary-100)',
        'primary-200': 'var(--primary-200)',
        'primary-300': 'var(--primary-300)',
        'primary-400': 'var(--primary-400)',
        'primary-500': 'var(--primary-500)',
        'primary-600': 'var(--primary-600)',
        'primary-700': 'var(--primary-700)',
        'primary-800': 'var(--primary-800)',
        'primary-900': 'var(--primary-900)',
        'primary-950': 'var(--primary-950)',

        'base-100-transparent': 'var(--b100-transparent)',

      }
    },
    fontFamily: {
      'treat': 'Threat',
      'bdo-grotesk': 'BDO Grotesk',
      'firacode': 'FiraCode'
    },
    fontSize: {
      fxs: ['0.6rem', '0.8rem'],
      fsm: ['0.8rem', '1rem'],
      fmd: ['0.9rem', '1rem'],
      fxl: ['1rem', '1.2rem'],
      bsm: ['1.1rem', '1.2rem'],
      bmd: ['1.3rem', '1.4rem'],
      bxl: ['1.5rem', '2rem'],
      hsm: ['1.8rem', '2rem'],
      hmd: ['2rem', '2.4rem'],
      hxl: ['2rem', '2.4rem'],
      tsm: ['3rem', '3.4rem'],
      tmd: ['4rem', '4.5rem'],
      txl: ['5rem', '5.5rem'],
    },
    screens: {
      'phone': '320px',
      'tablet': '600px',
      'tablet-p': '900px',
      'laptop': '1200px',
      'desktop': '1800px',
    },
  },
  daisyui: {
    themes: [
      {
        base: {
          'primary': '#e93ef7',
          '--primary-50': '#fef3ff',
          '--primary-100': '#fce7ff',
          '--primary-200': '#f9ceff',
          '--primary-300': '#f8a7ff',
          '--primary-400': '#f68cff',
          '--primary-500': '#e93ef7',
          '--primary-600': '#d01edb',
          '--primary-700': '#b115b6',
          '--primary-800': '#921395',
          '--primary-900': '#791679',
          '--primary-950': '#510151',

          'secondary': '#2fcce1',
          '--secondary-50': '#edfdfe',
          '--secondary-100': '#d2f9fb',
          '--secondary-200': '#abf0f6',
          '--secondary-300': '#70e3f0',
          '--secondary-400': '#2fcce1',
          '--secondary-500': '#13b0c7',
          '--secondary-600': '#138ca7',
          '--secondary-700': '#167188',
          '--secondary-800': '#1b5c6f',
          '--secondary-900': '#1b4d5e',
          '--secondary-950': '#0c3240',

          "neutral": "#6b7280",

          "base-100": "#070C12",
          '--b100-transparent': 'rbga(7,12,18,0.8)',

          "base-content": "#FFF",

          "info": "#0ea5e9",
          "success": "#22c55e",
          "warning": "#fbbd23",
          "error": "#dc2626",

          ".link": {
            "transition" : "font-weight,letter-spacing",
            "transition-function": "cubic-bezier(0.4, 0, 0.2, 1)",
            "transition-duration": "150ms",
            "text-decoration": "none"
          },
          ".link:hover": {
            "letter-spacing": "0.5rem"
          }

        },
      },
    ],
  },
}