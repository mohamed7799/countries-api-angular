/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "arrow-dropdown": "url('/assets/512px-Arrow-down.svg.png')",
      },
      colors: {
        Dark_Blue: "hsl(209, 23%, 22%)",
        Very_Dark_Blue: "hsl(207, 26%, 17%)",
        Dark_Gray: "hsl(0, 0%, 52%)",
        Very_Light_Gray: "hsl(0, 0%, 98%)",
        White: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
