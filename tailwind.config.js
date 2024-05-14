/** @type {import('tailwindcss').Config} */
import xBeshTheme from './packages/core/types/xBeshTheme';

export default {
  darkMode: ['class'],
  content: ['./packages/**//*.{js,ts,jsx,tsx}', './src/**//*.{js,ts,jsx,tsx}'],
  options: {
    safelist: {...xBeshTheme.safelist},
  },
  theme: {
    extend: {
      fontFamily: {...xBeshTheme.fontFamily},
      screens: {...xBeshTheme.screens},
      container: {...xBeshTheme.container},
      colors: {...xBeshTheme.colors},
      spacing: {...xBeshTheme.spacing},
      opacity: {...xBeshTheme.opacity},
      borderRadius: {...xBeshTheme.borderRadius},
      boxShadow: {...xBeshTheme.boxShadow},
      keyframes: {...xBeshTheme.keyframes},
      animation: {...xBeshTheme.animation},
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