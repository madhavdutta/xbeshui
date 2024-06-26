import type { ButtonVariant } from "../../../types/variantType";

// Define ButtonSize type representing the structure of button sizes
export type ButtonSize = {
  default: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  "compact-xs": string;
  "compact-sm": string;
  "compact-md": string;
  "compact-lg": string;
  icon: string;
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
