import { cva } from "class-variance-authority";
import type { ToggleGroupVariantsConfigType, ToggleVariantsConfigType } from "./toggleType";

export const toggleVariantsConfig: ToggleVariantsConfigType = {
  variants: {
    variant: {
      default: "bg-transparent",
      outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
    },
    size: {
      default: "h-9 px-3",
      xs: "h-7 px-2",
      sm: "h-8 px-2.5",
      md: "h-10 px-4",
      lg: "h-11 px-5",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      xxl: "rounded-2xl",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    radius: "md",
  },
};

export const toggleGroupVariantsConfig: ToggleGroupVariantsConfigType = {
  variants: {
    variant: {
      default: "bg-transparent hover:bg-muted",
      outline: "border border-input bg-transparent shadow-sm hover:bg-muted",
    },
    size: {
      default: "h-9 w-9",
      xs: "h-7 w-7",
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-11 w-11",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      xxl: "rounded-2xl",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    radius: "md",
  },
};

export const toggleVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-\[state=on\]:bg-accent data-\[state=on\]:text-accent-foreground",
  toggleVariantsConfig
);

export const toggleGroupVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  toggleGroupVariantsConfig
);