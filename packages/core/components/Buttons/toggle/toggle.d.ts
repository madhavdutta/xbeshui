import { ToggleVariant } from "../../../types/variantType";

// Define ToggleSize type representing the structure of button sizes
export type ToggleSize = {
  default: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
};

export type ToggleRadius = {
  none: "rounded-none";
  sm: "rounded-sm";
  md: "rounded-md";
  lg: "rounded-lg";
  xl: "rounded-xl";
  xxl: "rounded-2xl";
  full: "rounded-full";
}

export interface ToggleVariantsConfig {
  variants: {
    variant: ToggleVariant;
    size: ToggleSize;
    radius: ToggleRadius;
  };
  defaultVariants: {
    variant: keyof ToggleVariant;
    size: keyof ToggleSize;
    radius: keyof ToggleRadius;
  };
}
