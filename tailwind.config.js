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
          bg: '#0F1117',
          surface: '#181C24',
          text: '#F1F5F9',
          accent: '#991B1B',
          muted: '#64748B',
        },
        primary: '#991B1B',
        secondary: '#475569',
        accent: '#991B1B',
      }
    },
  },
  plugins: [],
}