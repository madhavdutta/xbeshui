export type ToggleVariantType = {
  "default": string;
  "destructive": string;
  "outline": string;
  "secondary": string;
  "ghost": string;
};

export type ToggleGroupVariantType = {
  default: string;
  success: string;
  warning: string;
  notice: string;
  destructive: string,
  outline: string;
};

// Define ToggleSize type representing the structure of button sizes
export type ToggleSizeType = {
  default: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
};

export type ToggleRadiusType = {
  none: "rounded-none";
  sm: "rounded-sm";
  md: "rounded-md";
  lg: "rounded-lg";
  xl: "rounded-xl";
  xxl: "rounded-2xl";
  full: "rounded-full";
}

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

export type ToggleGroupVariantsConfigType = {
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
