/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Helvetica', 'verdana', 'ui-sans-serif', 'system-ui',],
      'serif': ['ui-serif', 'Georgia', ],
      'mono': ['courier', 'ui-monospace', 'SFMono-Regular',],
      'display': ['Oswald', ],
      'body': ['"Open Sans"', ],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      keyframes: {

        slide_right: {
          '0%': { transform: 'translateX(0px)' },
          '100%':{ transform: 'translateX(224px)'},
        },

        slide_left: {
          '0%': { transform: 'translateX(224px)'},
          '100%':{ transform: 'translateX(0px)'}
        },

        slide_up: {
          '0%': {transform: 'translateY(200px)', opacity:0},
          '100%':{transfrom: 'translateY(0px)', opacity:1}
        },

        slide_down: {
          '0%': {transform: 'translateY(0px)', opacity:1},
          '100%':{transfrom: 'translateY(200px)', opacity:0}
        }
      },

      animation: {
        'opennav': 'slide_right .5s ease-in-out both',
        'closenav': 'slide_left .5s ease-in-out both',
        'slideup': 'slide_up .5s ease-in-out forwards',
        'slidedown': 'slide_down .5s ease-in-out forwards',
      }
    },
  },
  plugins: [    
    require('tailwind-scrollbar'),
  ],
}
