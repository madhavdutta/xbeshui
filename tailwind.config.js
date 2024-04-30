/** @type {import('tailwindcss').Config} */
import xBeshTheme from './packages/core/types/xBeshTheme';

export default {
  darkMode: ['dark'],
  content: ['./packages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  options: {
    safelist: xBeshTheme.safelist,
  },
  theme: {
    extend: {
      fontFamily: xBeshTheme.fontFamily,
      screens: xBeshTheme.screens,
      container: xBeshTheme.container,
      colors: xBeshTheme.colors,
      borderRadius: xBeshTheme.borderRadius,
      keyframes: xBeshTheme.keyframes,
      animation: xBeshTheme.animation,
      opacity: xBeshTheme.opacity,
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
};