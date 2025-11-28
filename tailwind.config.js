/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hero : ["Unbounded", "sans-serif"],  
        desc: ['"Quicksand", sans-serif'], 
        head: ['"Lilita One", sans-serif'], 

      },
      keyframes: {
        slowRotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "slow-rotate": "slowRotate 15s linear infinite",
      },
    },
  },
  plugins: [],
};
