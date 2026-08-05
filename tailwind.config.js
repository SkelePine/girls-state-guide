/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          navy: '#1B2A4A',
          gold: '#C9A84C',
          cream: '#FAF7F2',
          rose: '#D4A5A5',
          charcoal: '#2D2D2D',
        },
        fontFamily: {
          serif: ['"Playfair Display"', 'serif'],
          sans: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }