/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        light: "rgba(90, 114, 123, 0.11) 0px 7px 30px 0px",
        medium: "rgba(90, 114, 123, 0.22) 0px 7px 15px 0px",
      },
    },
    fontFamily: {
      montserrat: "Montserrat, sans-serif",
    },
  },
  plugins: [],
};
