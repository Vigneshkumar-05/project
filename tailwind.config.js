/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xsm: "12.8px"
      },
      boxShadow: {
        custom1: "1px 1px 1px 0px #0001",
        custom2: "rgb(0 0 0/20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px"
      },
      colors: {
        primaryRed: "#cc0000",
        secondaryRed: "#d60000",
        shadowGray: "#f5f5f5",
        txGray: "#5f5c5c",
        lgBlue: "#189"
      },
      backgroundImage: {
        "setup": "url('/src/ui/assets/images/EVM.png')",
      }
    },
  },
  plugins: [],
}

