import { cva } from "class-variance-authority";
import { ToggleGroupVariantsConfigType, ToggleVariantsConfigType } from "./toggleType";

export const toggleVariantsConfig: ToggleVariantsConfigType = {
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

export const toggleGroupVriantsConfig: ToggleGroupVariantsConfigType = 
{
  variants: {
    variant: {
      default: "hover:bg-accent bg-primary text-forground hover:text-accent-foreground",
      success: "bg-green-600 text-white	 shadow-sm hover:bg-accent",
      warning: "bg-orange-600 text-white shadow-sm hover:bg-accent",
      notice: "bg-blue-600 text-white	 shadow-sm hover:bg-accent",
      destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
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
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    radius: "md",
  },
};


export const toggleVariants = cva(
  "bg-background text-secondary-foreground inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  toggleVariantsConfig
)

export const toggleGroupVariants = cva(
  "bg-background text-secondary-foreground inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  toggleGroupVriantsConfig
)
