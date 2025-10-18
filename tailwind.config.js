/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cleaneraGreen: "#2E7D32",
        cleaneraYellow: "#FBC02D"
      }
    }
  },
  plugins: []
};