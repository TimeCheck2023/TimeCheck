/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cl1: "#C3FFF4",
        cl2: "#FFF500",
      },
      spacing: {
        "56p": "56%",
        "92p": "92%",
        "99p": "94.98%",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    // ...
  ],
};
