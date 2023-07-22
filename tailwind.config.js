/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#111d5e',
        'red': '#e32845',
        'gray': '#555',
        'light-gray': '#d9d9d9'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    screens: {
      sm: '540px',
      md: '768px',
      lg: '1024px',
      xl: '1172px',
    },
  },
  plugins: [],
}

