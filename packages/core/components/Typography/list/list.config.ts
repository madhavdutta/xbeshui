import { cva } from "class-variance-authority";

export const listVariants = cva("list-none", {
  variants: {
    type: {
      default: "list-none",
      none: "list-none",
      disc: "list-disc",
      decimal: "list-decimal",
    },
    fontSize: {
      default: "text-base",
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
    },
    position: {
      default: "list-inside",
      inside: "list-inside",
      outside: "list-outside",
    },
  },
  defaultVariants: {
    type: "default",
    fontSize: "default",
    position: "default",
  },
});
