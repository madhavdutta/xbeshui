export type ImageSizeType = {
  default: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  full: string
};

export type ImageFitType = {
  contain: string;
  cover: string;
  fill: string;
  none: string;
  scaleDown: string;
};

export interface ImageVariantsConfigType {
  variants: {
    radius: ImageSizeType;
    fit: ImageFitType;
  };
  defaultVariants: {
    radius: keyof ImageSizeType;
    fit: keyof ImageFitType;
  };
}
