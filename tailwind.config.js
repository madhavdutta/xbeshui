import xBeshTheme from "./packages/core/types/xBeshTheme"

export default {
  darkMode: ["class"],
  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [
    "./packages/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: xBeshTheme.fontFamily,
    screens: xBeshTheme.screens,
    container: xBeshTheme.container,
    extend: {
      colors: xBeshTheme.colors,
      borderRadius: xBeshTheme.borderRadius,
      keyframes: xBeshTheme.keyframes,
      animation: xBeshTheme.animation,
      opacity: xBeshTheme.opacity,
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
}