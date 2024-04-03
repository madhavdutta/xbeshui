export interface progressVariantConfigType {
  variants: {
    variant: {
      default: string;
    };
    radius: {
      default: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    size: {
      default: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    striped: {
      default: string;
    };
    animated: {
      default: string;
    };
  };
  defaultVariants: {
    variant: keyof progressVariantConfigType["variants"]["variant"];
    radius: keyof progressVariantConfigType["variants"]["radius"];
    size: keyof progressVariantConfigType["variants"]["size"];
    striped: keyof progressVariantConfigType["variants"]["striped"];
    animated: keyof progressVariantConfigType["variants"]["animated"];
  };
}

export interface ProgressProps extends VariantProps<typeof progressVariants> {
  value?: number;
  color?: string;
  variant?: keyof progressVariantConfigType["variants"]["variant"];
  radius?: keyof progressVariantConfigType["variants"]["radius"];
  size?: keyof progressVariantConfigType["variants"]["size"];
  striped?: keyof progressVariantConfigType["variants"]["striped"];
  animated?: keyof progressVariantConfigType["variants"]["animated"];
}
