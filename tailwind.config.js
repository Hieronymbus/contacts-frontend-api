/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Adjust paths to match your project
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-hsl': '0 0 10px hsl(211, 100%, 50%)'
      }
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.custom-input-label': {},
        '.custom-input-label:hover': {
          borderColor: 'rgb(209 213 219);'
        },
        '.custom-input-label::after': {
          content: '"Browse"',
          position: 'absolute',
          right: '0',
          padding: '10px 15px',
          backgroundColor: 'rgb(156 163 175);',
          color: 'white',
          borderRadius: '4px',
          cursor: 'pointer',
          border: '1px solid rgb(156 163 175);',
        },
        '.custom-input-label:hover::after': {
          backgroundColor: 'rgb(209 213 219);',
          borderColor: 'rgb(209 213 219);'
        }
      });
    },
  ],
};