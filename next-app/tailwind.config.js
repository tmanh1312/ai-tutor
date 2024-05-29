/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lulu: {
          "100": "#E30613",
          "200": "rgba(232, 0, 44, 0.07)"
        },
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
};
