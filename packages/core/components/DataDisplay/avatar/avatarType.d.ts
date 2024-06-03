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

type IndicatorPositionType = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center" | "left-center" | "right-center";

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

export type {
  AvatarSizeType,
  AvatarRadiusType,
  IndicatorPositionType,
  AvatarVariantsConfigType,
};