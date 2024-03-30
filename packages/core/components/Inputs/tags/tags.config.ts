import { cva } from "class-variance-authority";
import { tagsConfigType } from "./tags.d";
const tagsConfig: tagsConfigType = {
  variants: {
    labelPosition: {
      default: "",
      right: "",
      left: "",
    },
    size: {
      default: "w-4/6",
      xs: "w-3/12",
      sm: "w-4/12",
      md: "w-3/6",
      lg: "w-4/6",
      xl: "w-5/6",
      full: "w-full",
    },

    variant: {
      default: "none",
      filled: "bg-gray-200",
      unstyled: "border-0 shadow-none",
    },
    error: {
      default: "",
      true: "border-red-500 text-red-500",
      false: "",
    },

    radius: {
      default: "rounded-none",
      xs: "rounded-xs",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
  },
  defaultVariants: {
    labelPosition: "default",
    radius: "default",
    variant: "default",
    size: "default",
  },
};
export const tagInputVariants = cva(
  "w-full h-9 rounded-md  text-sm" ,
  tagsConfig
);
