import { VariantProps, cva } from "class-variance-authority";
import { ButtonSizeType, ButtonVariantType, ButtonRadiusType, ButtonVariantsConfigType } from "./buttonType";

export const ButtonConfig: ButtonVariantsConfigType = {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
      success: "bg-green-600 text-white	 shadow-sm hover:bg-green/90",
      warning: "bg-orange-600 text-white shadow-sm hover:bg-orange/90",
      notice: "bg-blue-600 text-white	 shadow-sm hover:bg-blue/90",
      destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    },
    size: {
      default: "rounded-md h-8 px-4 text-sm",
      xs: "rounded-md h-6 px-2 text-xs",
      sm: "rounded-md h-8 px-3 text-xs",
      md: "rounded-md h-8 px-4 text-sm",
      lg: "rounded-md h-8 px-4 text-md",
      icon: "rounded-md h-8 w-8 p-0 text-md",
      "compact-xs": "rounded-sm px-1 text-xs",
      "compact-sm": "rounded-sm px-1 text-sm",
      "compact-md": "rounded-sm px-1 text-sm",
      "compact-lg": "rounded-sm px-1 text-md",
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

export const buttonVariants = cva(
  "bg-background text-secondary-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
  ButtonConfig
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  variant?: keyof ButtonVariantType | null;
  size?: keyof ButtonSizeType | null;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top" | string;
  radius?: keyof ButtonRadiusType;
  loading?:boolean;
}

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof buttonVariants> {
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  variant?: keyof ButtonVariantType | null;
  size?: keyof ButtonSizeType | null;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top" | string;
  radius?: keyof ButtonRadiusType;
  loading?:boolean;
}
