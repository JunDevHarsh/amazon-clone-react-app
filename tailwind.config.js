/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#131921",
        "light-gray": "#f3f3f3",
        "amazon-orange": "#e47911",
        "amazon-yellow-orange": "#ffa41c",
        "light-dark-blue": "#232f3e",
        "amazon-dark-red": "#B12704",
      },
      boxShadow: {
        "amazon-box-shadow": "0 0 0 2px #f90, 0 0 0 3px rgb(255 153 0 / 50%)",
      },
    },
  },
  plugins: [],
};
