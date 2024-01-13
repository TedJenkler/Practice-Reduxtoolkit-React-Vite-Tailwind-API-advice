/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#202733',
        'grey-blue': '#313A48',
        'neon': '#53FFAA',
        'grey': '#4F5D74',
        'cyan': '#CEE3E9',
      },
    },
  },
  plugins: [],
}

