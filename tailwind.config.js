/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    colors: {
      primary: "rgb(247 247 247)",
      purple: {
        100: "hsl(254, 88%, 90%)",
        500: "hsl(256, 67%, 59%)",
      },
      yellow: {
        100: "hsl(31, 66%, 93%)",
        500: "hsl(39, 100%, 71%)",
      },
      White: "hsl(0, 0%, 100%)",
      Black: "hsl(0, 0%, 7%)",
    },
    extend: {
      screens: {
        pr: { max: "900px" },
        sc: { max: "500px" },
      },
      fontFamily: {
        custom: ['"DM Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
