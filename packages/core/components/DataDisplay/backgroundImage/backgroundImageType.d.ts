import { VariantProps } from "class-variance-authority";

export type BackgroundImageSizeType = {
  default: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export type BackgroundImageRadiusType = {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  full: string;
};

export type BackgroundImageFitType = {
  contain: string;
  cover: string;
  fill: string;
  none: string;
  scaleDown: string;
};

export interface BackgroundImageVariantsConfigType {
  variants: {
    radius: BackgroundImageRadiusType;
    fit: BackgroundImageFitType;
  };
  defaultVariants: {
    radius: keyof BackgroundImageRadiusType;
    fit: keyof BackgroundImageFitType;
  };
}

