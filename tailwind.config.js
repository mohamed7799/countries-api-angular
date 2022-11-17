/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "arrow-dropdown": "url('/assets/512px-Arrow-down.svg.png')",
      },
    },
  },
  plugins: [],
};
