/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.15rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "4.441rem",
      "5xl": "8.052rem",
    },
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #023954 0%, #fc919f 100%)",
      },
      animation: {
        "fade-in": "fadeIn 2s ease-out forwards infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      colors: {
        "space-cadet": "#2B2D42",
        "ultra-violet": "#595D88",
        "cool-grey": "#9C9FBF",
        "rich-black": "#101119",
        "tea-rose": "#F9C8CA",
      },
      fontFamily: {
        staatliches: ['"Staatliches"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
