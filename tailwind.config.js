const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        calibre: ["Calibre", "sans-serif"],
        courier: ["Courier", "monospace"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
});
