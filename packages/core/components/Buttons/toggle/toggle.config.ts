import { ToggleVariantsConfig } from "./toggle.d";

export const toggleVariantsConfig: ToggleVariantsConfig = {
    variants: {
      variant: {
        default: "hover:bg-accent hover:text-accent-foreground",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "p-3 text-sm",
        xs: "p-0.5 text-xs",
        sm: "p-1 rounded-md text-sm",
        md: "p-2 text-md",
        lg: "p-3 rounded-md text-md",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        xxl: "rounded-2xl",
        full: "rounded-full"
      }
      ,
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "md"
    },
  };