// import { ButtonVariant } from "../../../types/variantType";
export type ButtonVariantType = {
  default: string;
  success: string;
  warning: string;
  notice: string;
  destructive: string;
  outline: string;
  secondary: string;
  ghost: string;
  link: string;
};

// Define ButtonSize type representing the structure of button sizes
export type ButtonSizeType = {
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

export type ButtonRadiusType = {
  none: "rounded-none";
  xs: "rounded-xs";
  sm: "rounded-sm";
  md: "rounded-md";
  lg: "rounded-lg";
  xl: "rounded-xl";
  xxl: "rounded-2xl";
  full: "rounded-full";
}

export interface ButtonVariantsConfigType {
  variants: {
    variant: ButtonVariantType;
    size: ButtonSizeType;
    radius: ButtonRadiusType;
  };
  defaultVariants: {
    variant: keyof ButtonVariantType;
    size: keyof ButtonSizeType;
    radius: keyof ButtonRadiusType;
  };
}