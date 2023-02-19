/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem"
      },
      colors: {
        primary: "#f5a706",
        secondary: "#2d2d2d",
        accent: "#8b552f"
      }
    },
  },
  plugins: [],
};
