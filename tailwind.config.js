/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    'node_modules/preline/dist/*.js',
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        /* Replace the colors with their HSL equivalents */
        "primary-color": "#9f4298",
        "secondary-color": "#c2b4d6",
        "navbar-bg-color": "#C4BA3B",
        "light-mode-bg-color": "#d1afd3",
        "dark-mode-bg-color": "#9f4298",
      },
    },
  },
  plugins: [require('preline/plugin'),],
};
