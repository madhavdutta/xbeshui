import { cva } from "class-variance-authority";
import type { AccordionVariantsType } from "./accordionType";

const accordionVariant: AccordionVariantsType = {
  variants: {
    variant: {
      default: "border-input",
      filled: "border-input",
      contained: "border border-input rounded-sm",
      separated: "border-t border-b border-input",
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
      default: "",
      left: "flex-row-reverse",
      right: "",
    },
    chevronSize: {
      default: "h-2 w-2",
      xs: "h-1 w-1",
      sm: "h-3 w-3",
      md: "h-4 w-4",
      lg: "h-5 w-5",
      xl: "h-6 w-6",
      xxl: "h-10 w-10",
    },
  },
  defaultVariants: {
    variant: "default",
    radius: "default",
    chevronPosition: "default",
    chevronSize: "default",
  },
};

export const accordionVariants = cva("bg-background font-default text-secondary-foreground  border-input w-full", accordionVariant);
