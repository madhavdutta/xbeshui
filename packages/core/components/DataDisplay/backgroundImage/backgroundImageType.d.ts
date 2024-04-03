import { VariantProps } from "class-variance-authority";

export type BackgroundImageSize = {
  default: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export type BackgroundImageRadius = {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  full: string;
};

export type BackgroundImageFit = {
  contain: string;
  cover: string;
  fill: string;
  none: string;
  scaleDown: string;
};

export interface BackgroundImageVariantsConfig {
  variants: {
    radius: BackgroundImageRadius;
    fit: BackgroundImageFit;
  };
  defaultVariants: {
    radius: keyof BackgroundImageRadius;
    fit: keyof BackgroundImageFit;
  };
}

export interface BackgroundImageProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof backgroundImageVariants> {
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  radius: keyof BackgroundImageRadius;
  fit: keyof BackgroundImageFit;
}
