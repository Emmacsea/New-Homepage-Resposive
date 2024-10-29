/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          softorange: "hsl(35, 77%, 62%)",
          softred: "hsl(5, 85%, 63%)",
        },

        neutral: {
          offwhite: "hsl(36, 100%, 99%)",
          grayishblue: "hsl(233, 8%, 79%)",
          dgrayishblue: "hsl(236, 13%, 42%)",
          vdarkblue: "hsl(240, 100%, 5%)",
        }
      }
    },
  },
  plugins: [],
}