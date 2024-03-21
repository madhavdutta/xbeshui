import { cva } from "class-variance-authority";

export const imageVariants = cva("", {
  variants: {
    radius: {
      default: "rounded-none",
      xs: "rounded-xs",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
    fit: {
      contain: "object-contain",
      cover: "object-cover",
      fill: "object-fill",
      none: "object-none",
      scaleDown: "object-scale-down",
    },
  },
  defaultVariants: {
    radius: "default",
    fit: "cover",
  },
});
