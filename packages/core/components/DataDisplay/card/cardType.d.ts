import { VariantProps } from "class-variance-authority";

export type CardSizeType = {
  default: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export type CardRadiusType = {
  default: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};
export type CardShadowType = {
  default: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export interface CardVariantsConfigType {
  variants: {
    size: CardSizeType;
    radius: CardRadiusType;
    shadow: CardShadowType;
    withBorder: {
      default: string;
      true: string;
      false: string;
    };
  };
  defaultVariants: {
    size: keyof CardSizeType;
    withBorder:boolean;
    shadow: keyof CardShadowType;
    radius: keyof CardRadiusType;
  };
}


