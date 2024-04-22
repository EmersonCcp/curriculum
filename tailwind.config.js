/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      xs: "480px",
      xxs: "360px",
    },
    extend: {},
  },
  plugins: [require("tailwindcss-animated")],
};
