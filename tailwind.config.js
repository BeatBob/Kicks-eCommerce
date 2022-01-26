module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        dash: {
          "0%": { transform: "translateX(300px)" },
          "100%": {
            transform: "translateX(0px)",
          },
        },
      },
      animation: {
        dash: "dash 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
