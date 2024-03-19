import { ButtonVariantsConfig } from "./button.d";

export const ButtonConfig:ButtonVariantsConfig = {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "rounded-md py-1 px-4 text-md",
        xs: "rounded-md py-1 px-3 text-xs",
        sm: "rounded-md py-1 px-3 text-sm",
        md: "rounded-md py-1 px-4 text-md",
        lg: "rounded-md py-1 px-4 text-lg",
        "compact-xs": "rounded-sm px-1 text-xs",
        "compact-sm": "rounded-sm px-1 text-sm",
        "compact-md": "rounded-sm px-1 text-md",
        "compact-lg": "rounded-sm px-1 text-lg",
        icon: "h-9 w-9"
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
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "md"
    },
  };