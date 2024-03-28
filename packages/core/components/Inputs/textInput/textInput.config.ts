import { cva } from "class-variance-authority";
import { inputConfigType } from "./textInput.d";

const inputConfig: inputConfigType = {
  variants: {
    labelPosition: {
      default: "",
      right: "",
      left: "",
    },

    variant: {
      default: "none",
      filled: "bg-gray-200",
      unstyled: "border-0 shadow-none",
    },

    radius: {
      default: "rounded-none",
      xs: "rounded-xs",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
    error:{
      default:'',
      'true':'border-red-500 text-red-500',
      'false':''
    }
  },
  defaultVariants: {
    labelPosition: "default",
    radius: "default",
    variant: "default",
  },
};

export const inputVariants = cva(
  "w-full h-9 rounded-md border border-input bg-transparent text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  inputConfig
);
