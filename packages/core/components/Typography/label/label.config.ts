import { cva } from "class-variance-authority";
import type { labelVariantsType } from "./labelType";

const fontSizes = {
  default: "text-sm",
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
  default: "font-sans",
  sans: "font-sans",
  serif: "font-serif",
  mono: "font-mono",
};

const fontWeight = {
  default: "font-medium",
  normal: "font-normal",
  thin: "font-thin",
  light: "font-light",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
};
const labelConfig: labelVariantsType = {
  variants: {
    fontSize: fontSizes,
    fontFamily: fontFamilies,
    fontWeight: fontWeight,
  },
  defaultVariants: {
    fontSize: "default",
    fontFamily: "default",
    fontWeight: "default",
  },
};
const labelVariants = cva(
  "bg-transparent text-foreground text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  labelConfig
);

export { labelVariants };
