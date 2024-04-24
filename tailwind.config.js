const flowbite = require("flowbite-react/tailwind");
const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      colors: {
        clifford: "#da373d",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
});