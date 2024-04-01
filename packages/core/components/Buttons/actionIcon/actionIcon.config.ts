import { cva } from "class-variance-authority";
import { AcionIconConfigType } from "./actionIcon.d";

export const AcionIconConfig: AcionIconConfigType = {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
      success: "bg-green-600 text-white	 shadow-sm hover:bg-accent",
      warning: "bg-orange-600 text-white shadow-sm hover:bg-accent",
      notice: "bg-blue-600 text-white	 shadow-sm hover:bg-accent",
      destructive:
        "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      outline:
        "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
      secondary:
        "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    },
    size: {
      default: "h-10 w-10",
      xs: "h-8 w-8",
      sm: "h-9 w-9",
      md: "h-10 w-10",
      lg: "h-11 w-11",
      xl: "h-14 w-14",
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
export const actionIconVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
  AcionIconConfig
);
