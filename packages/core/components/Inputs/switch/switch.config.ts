import { cva } from "class-variance-authority";
import { switchConfigType } from "./switch.d";

const switchConfig: switchConfigType = {
  variants: {
    labelPosition: {
      default: "",
      left: "",
      right: "",
    },
    size: {
      default: "h-5 w-9",
      xs: "h-3 w-7",
      sm: "h-4 w-8",
      md: "h-5 w-9",
      lg: "h-6 w-10",
      xl: "h-7 w-12",
    },
    radius: {
      default: "rounded-full",
      xs: "rounded-xs",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
  },
  defaultVariants: {
    labelPosition: "default",
    size: "default",
    radius: "default",
  },
};

export const switchVariants = cva("", switchConfig);
