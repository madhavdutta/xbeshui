import { cva } from "class-variance-authority";
import { AccordionVariants } from "./accordion.d";

const accordionVariant: AccordionVariants = {
  variants: {
    variant: {
      default: "",
      filled: "bg-gray-200",
      contained: "border border-gray-200 rounded-md",
      separated: "border-t border-b border-gray-200",
    },
    radius: {
      default: "rounded-none",
      xs: "rounded-xs",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
    chevronPosition: {
      default: "ml-0",
      left: "ml-2",
      right: "mr-2",
    },
    chevronsize: {
      default: 2,
      xs: 1,
      sm: 3,
      md: 4,
      lg: 5,
      xl: 6,
      xxl: 8,
    },
  },
  defaultVariants: {
    variant: "default",
    radius: "default",
    chevronPosition: "default",
    chevronsize: "default",
  },
};

export const accordionVariants = cva("w-full", accordionVariant);
