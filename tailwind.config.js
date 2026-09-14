/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: '#0B080E',
          surface: '#16101D',
          text: '#FDF8FA',
          accent: '#F59E0B',
          muted: '#E11D48',
        },
        primary: '#E11D48',
        secondary: '#F59E0B',
        accent: '#F43F5E',
      }
    },
  },
  plugins: [],
}