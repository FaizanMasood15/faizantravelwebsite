/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
       keyframes: {
        fly: {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(20px, -10px)' },
          '100%': { transform: 'translate(0, 0)' },
        }
      },
      animation: {
        fly: 'fly 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

