/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "1px 1px 1px 0px #0001",
      },
      colors: {
        primaryRed: "#cc0000",
        secondaryRed: "#d60000",
        shadowGray: "#f5f5f5",
        txGray: "#5f5c5c",
        lgBlue: "#189"
      }
    },
  },
  plugins: [],
}

