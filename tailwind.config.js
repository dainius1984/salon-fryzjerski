/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          purple: {
            50: '#f5f3ff',
            100: '#ede9fe',
            600: '#9333ea',
            700: '#7e22ce',
            800: '#6b21a8',
          },
        },
        fontFamily: {
          'playfair': ['"Playfair Display"', 'serif'],
          'lato': ['Lato', 'sans-serif'],
        },
        textShadow: {
          'md': '2px 2px 4px rgba(0, 0, 0, 0.3)',
        },
      },
    },
    plugins: [
      function ({ addUtilities }) {
        const newUtilities = {
          '.text-shadow-md': {
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          },
        }
        addUtilities(newUtilities)
      }
    ],
  }