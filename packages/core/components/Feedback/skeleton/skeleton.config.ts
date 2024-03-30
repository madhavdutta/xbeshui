import { cva } from "class-variance-authority";
import { skeletonVariantsConfigType } from "./skeleton.d";

const skeletonVariantsConfig: skeletonVariantsConfigType = {
  variants: {
    radius: {
      default: "rounded-md",
      xs: "rounded",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
    animate: {
      default: "",
      pulse: "animate-pulse",
    },
  },
  defaultVariants: {
    radius: "default",
    animate: "default",
  },
};

export const skeletonVariants = cva(
  "animate-pulse rounded-md h-2 bg-primary/10",
  skeletonVariantsConfig
);
