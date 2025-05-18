/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "lpeach":"#fdfcdc",
        "peach":"#fed9b7",
        "olive":"#00afb9",
        "babyblue":"#0081a7",
        "bred":"#f07167",
      },
    },
  },
  plugins: [],
};
