import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils";

// Define ButtonVariant type representing the structure of button variants
export type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";

// Define ButtonSize type representing the structure of button sizes
export type ButtonSize = "default" | "sm" | "md" | "lg" | "icon";

export interface ButtonVariantsConfig {
  variants: {
    variant: Record<string, string>;
    size: Record<string, string>;
  };
  defaultVariants: {
    variant: string;
    size: string;
  };
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const buttonVariantsConfig: ButtonVariantsConfig = {
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
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      md: "h-9 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
};

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  buttonVariantsConfig
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, leftSection, rightSection, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        {leftSection && <span className="mr-2">{leftSection}</span>}
        {children}
        {rightSection && <span className="ml-2">{rightSection}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
