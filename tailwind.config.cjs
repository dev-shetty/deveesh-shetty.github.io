/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-800": "#131313",
        "primary-100": "#FFFFFF",
        accent: "#FF5733",
      },
      screens: {
        "-md": { max: "768px" },
      },
    },
  },
  plugins: [],
}
