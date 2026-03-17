/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ffc-green': '#006B3F',
        'ffc-green-light': '#00A86B',
        'ffc-orange': '#FF6B6B',
        'ffc-gray': '#F0F0F0',
      },
    },
  },
  plugins: [],
}
