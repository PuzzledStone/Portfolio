/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {    
    extend: {
      colors: {
        'dark-blue': '#050816',
        'blue': '#2E518E',
        'light-blue': '#5493FF',
        'green' : '#1F6C59'
      }
    },
  },
  plugins: [],
}

