/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    screens: {
      xxs: "320px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1440px",
    },
    extend: {
      colors: {
        cream: "#F4F0E5",
        grey: "#E7EADA",
        lime: "#9BCE72",
        lightGreen: "#D9DFCE",
      },
      fontFamily: {
        playfair: ["Playfair", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}