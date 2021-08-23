module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "bounce-bottom-left": "bounce-bottom-left 1s",
      },
      keyframes: {
        "bounce-bottom-left": {
          "0%": {
            opacity: 0.1,
            margin: 0,
            transform: "translate(-50%, 50%) scale(0.4)",
            "animation-timing-function": "cubic-bezier(0.18, 0.89, 0.32, 1.2)",
          },
          "50%": {
            opacity: 1,
            transform: "translate(0) scale(1)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
