/** @type {import('tailwindcss').Config} */

import theme from "tailwindcss/defaultTheme";
import xBeshTheme from "./packages/core/types/xBeshTheme";

export default {
  darkMode: ["dark"],
  content: ["./packages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  // purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  prefix: "",
  theme: {
    fontFamily: xBeshTheme.fontFamily,
    screens: {
      sm: xBeshTheme.screens.sm,
      md: xBeshTheme.screens.md,
      lg: xBeshTheme.screens.lg,
      xl: xBeshTheme.screens.xl,
      "2xl": xBeshTheme.screens["2xl"],
    },
    container: xBeshTheme.container,
    colors: theme.colors,
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
    require("tailwindcss/colors"),
  ],
};
