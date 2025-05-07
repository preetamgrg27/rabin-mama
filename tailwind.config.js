// tailwind.config.js
module.exports = {
    content: ["./*.html"],
    theme: {
      extend: {
        animation: {
          pop: "pop 0.4s ease-in-out forwards"
        },
        keyframes: {
          pop: {
            "0%": {
              transform: "scale(0.5)",
              opacity: "0",
            },
            "100%": {
              transform: "scale(1)",
              opacity: "1",
            },
          },
        },
      },
    },
    plugins: [],
  }
  