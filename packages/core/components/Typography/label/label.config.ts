import { cva } from "class-variance-authority";

const fontSizes = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
  "9xl": "text-9xl",
};

const fontFamilies = {
  sans: "font-sans",
  serif: "font-serif",
  mono: "font-mono",
};

const fontWidths = {
  normal: "font-normal",
  thin: "font-thin",
  light: "font-light",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
};

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      fontSize: fontSizes,
      fontFamily: fontFamilies,
      fontWidth: fontWidths,
    },
    defaultVariants: {
      fontSize: "base",
      fontFamily: "sans",
      fontWidth: "normal",
    },
  }
);

export { labelVariants };
