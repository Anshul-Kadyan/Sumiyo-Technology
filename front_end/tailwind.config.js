/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        grey: {
          DEFAULT: "#f5f5f5",
        },
        cblue: {
          DEFAULT: "#536fd2",
        },
        ccblue: {
          DEFAULT: "#cfddff",
        },
        cccblue: {
          DEFAULT: "#f6fcff",
        },
      },
    },
    fontFamily: {
      exo: ["Exo 2", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      patrick: ["Patrick Hand", "cursive"],
    },
  },
  plugins: [],
};
