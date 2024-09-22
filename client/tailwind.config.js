/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#031F42",
        primary: "#5169F1",
      },
    },
  },
  plugins: [],
};
