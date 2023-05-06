module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Commissioner"],
      serif: ["Source Code Pro"],
    },
    extend: {
      animation: {
        "bounce-bottom-left": "bounce-bottom-left 1s",
        "spin-slow": "spin 18s linear infinite",
        "fade-visible": "visibility 0s 2s, opacity 2s linear",
      },
      transition: {
        visibility: "visibility 0s 2s, opacity 2s linear",
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
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
