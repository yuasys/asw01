/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('../src/images/asw_01_top.jpg')",
      },
    },
  },
  plugins: [],
};
