/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "soft-lg": "0 18px 45px rgba(0,0,0,0.55)",
      },
    },
  },
  plugins: [],
};
