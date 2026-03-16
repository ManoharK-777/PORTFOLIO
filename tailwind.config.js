/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6366f1', // Indigo
          DEFAULT: '#4f46e5',
          dark: '#3730a3',
        },
        secondary: {
          light: '#a855f7', // Purple
          DEFAULT: '#9333ea',
          dark: '#7e22ce',
        },
        dark: {
          DEFAULT: '#0f172a', // Slate 900
          lighter: '#1e293b', // Slate 800
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
