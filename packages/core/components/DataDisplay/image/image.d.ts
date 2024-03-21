import { VariantProps } from "class-variance-authority";

export type ImageSize = {
  default: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export type ImageFit = {
  contain: string;
  cover: string;
  fill: string;
  none: string;
  scaleDown: string;
};

export interface ImageVariantsConfig {
  variants: {
    radius: ImageSize;
    fit: ImageFit;
  };
  defaultVariants: {
    radius: keyof ImageSize;
    fit: keyof ImageFit;
  };
}

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement>, VariantProps<typeof imageVariants> {
  width?: string | number;
  height?: string | number;
  radius?: keyof ImageSize;
  fit?: keyof ImageFit;
}
