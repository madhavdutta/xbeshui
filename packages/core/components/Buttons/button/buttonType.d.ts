// import { ButtonVariant } from "../../../types/variantType";
export type ButtonVariant = {
  "default": string;
  "success": string;
  "warning": string;
  "notice": string;
  "destructive": string;
  "outline": string;
  "secondary": string;
  "ghost": string;
  "link": string;
};
// Define ButtonSize type representing the structure of button sizes
export type ButtonSize = {
  default: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  icon: string;
  "compact-xs": string;
  "compact-sm": string;
  "compact-md": string;
  "compact-lg": string;
};

export type ButtonRadius = {
  none: "rounded-none";
  sm: "rounded-sm";
  md: "rounded-md";
  lg: "rounded-lg";
  xl: "rounded-xl";
  xxl: "rounded-2xl";
  full: "rounded-full";
}

export interface ButtonVariantsConfig {
  variants: {
    variant: ButtonVariant;
    size: ButtonSize;
    radius: ButtonRadius;
  };
  defaultVariants: {
    variant: keyof ButtonVariant;
    size: keyof ButtonSize;
    radius: keyof ButtonRadius;
  };
}
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  variant?: keyof ButtonVariant | null;
  size?: keyof ButtonSize | null;
  radius?: keyof ButtonRadius;
  loading?:boolean;
}
