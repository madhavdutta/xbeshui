export interface SimpleGridVariantType {
  variants: {
    cols: {
      base: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };

    verticalSpacing: {
      base: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    spacing: {
      base: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  };
  defaultVariants: {
    cols: keyof SimpleGridVariantType["variants"]["cols"];
    verticalSpacing: keyof SimpleGridVariantType["variants"]["verticalSpacing"];
    spacing: keyof SimpleGridVariantType["variants"]["spacing"];
  };
}