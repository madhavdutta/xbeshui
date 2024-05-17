import { VariantProps } from "class-variance-authority";

type AvatarSizeType = {
  default: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
};

type AvatarRadiusType = {
  default: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  full: string;
};

interface AvatarVariantsConfigType {
  variants: {
    radius: AvatarRadiusType;
    size: AvatarSizeType;
  };
  defaultVariants: {
    radius: keyof AvatarRadiusType;
    size: keyof AvatarSizeType;
  };
}


export type {AvatarSizeType,AvatarRadiusType, AvatarVariantsConfigType };