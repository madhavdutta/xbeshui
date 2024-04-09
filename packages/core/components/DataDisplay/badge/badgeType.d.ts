import { VariantProps } from "class-variance-authority";
import { ButtonVariant } from "../../../types/variantType";

export type BadgeSizeType = {
  default: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  "compact-xs": string;
  "compact-sm": string;
  "compact-md": string;
  "compact-lg": string;
};

export type BadgeRadiusType = {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  full: string;
};

export interface BadgeVariantsConfigType {
  variants: {
    variant: ButtonVariantType;
    size: BadgeSizeType;
    radius: BadgeRadiusType;
  };
  defaultVariants: {
    variant: keyof ButtonVariantType;
    size: keyof BadgeSizeType;
    radius: keyof BadgeRadiusType;
  };
}
