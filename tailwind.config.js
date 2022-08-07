/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'light-coral': '#f28482',
      'sage-blue': '#84a59d',
      'baby-pink': '#f5cac3',
      'cream': '#f7ede2',
      'golden-yellow': '#f6bd60',
    }
  },
  plugins: [],
}
