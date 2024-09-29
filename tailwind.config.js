/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "8.052rem",
    },
    extend: {
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
        "burnt-red": "#ff5943",
        "orange-pumpkin": "#F52F57",
      },
      fontFamily: {
        staatliches: ['"Staatliches"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
