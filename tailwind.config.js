/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0891B2',
          dark: '#0E7490',
        },
        secondary: {
          DEFAULT: '#F59E0B',
          dark: '#D97706',
        },
        accent: {
          DEFAULT: '#10B981',
          dark: '#059669',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};