/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["sans-serif", "sans-serif"],
      serif: ["Merriweather", "serif"],
      display: ["Yellowtail", "serif"],
    },
    extend: {
      colors: {
        blue: "#33ABD1",
      },
      spacing: {
        100: "30rem",
      },
    },
  },
  plugins: [],
};
