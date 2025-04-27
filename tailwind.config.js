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
      },
    },
    plugins: [],
  }