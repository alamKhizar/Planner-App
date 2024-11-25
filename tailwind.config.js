/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Components/**/*.{js,jsx,ts,tsx}","./app/**/*.{js,jsx,ts,tsx}",
    "./app/index.tsx",
    "./Components/HomeScreen.js",
  ],

  theme: {
    extend: {
      colors:{
        primary:"#A2BD9D"
      }
    },
  },
  plugins: [],
}