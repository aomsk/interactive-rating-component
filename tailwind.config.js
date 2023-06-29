/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "hsl(25, 97%, 53%)",
        white: "hsl(0, 0%, 100%)",
        lightGrey: "hsl(217, 12%, 63%)",
        mediumGrey: "hsl(216, 12%, 54%, .2)",
        darkBlue: "hsl(213, 19%, 18%, .6)",
        veryDarkBlue: "hsl(216, 12%, 8%)",
      },
    },
  },
  plugins: [],
};
