/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': 'rgb(57, 255, 20)',
        'deep-purple': 'rgb(26, 11, 46)',
        'neon-blue': '#00F0FF',
        'neon-purple': '#B14EFF',
        'neon-orange': '#FF6B4E',
        'neon-yellow': '#FFE600',
        'neon-pink': '#FF00E6',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'neon': '0 0 10px rgba(57, 255, 20, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};