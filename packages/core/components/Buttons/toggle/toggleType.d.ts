export type ToggleVariantType = {
  default: string;
  outline: string;
};

export type ToggleGroupVariantType = {
  default: string;
  outline: string;
};

export type ToggleSizeType = {
  default: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
};

export type ToggleRadiusType = {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  full: string;
};

export interface ToggleVariantsConfigType {
  variants: {
    variant: ToggleVariantType;
    size: ToggleSizeType;
    radius: ToggleRadiusType;
  };
  defaultVariants: {
    variant: keyof ToggleVariantType;
    size: keyof ToggleSizeType;
    radius: keyof ToggleRadiusType;
  };
}

export interface ToggleGroupVariantsConfigType {
  variants: {
    variant: ToggleGroupVariantType;
    size: ToggleSizeType;
    radius: ToggleRadiusType;
  };
  defaultVariants: {
    variant: keyof ToggleGroupVariantType;
    size: keyof ToggleSizeType;
    radius: keyof ToggleRadiusType;
  };
}