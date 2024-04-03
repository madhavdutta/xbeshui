export interface switchConfigType {
  variants: {
    labelPosition: {
      default: string;
      left: string;
      right: string;
    };
    size: {
      default: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    radius: {
      default: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  };
  defaultVariants: {
    labelPosition: keyof switchConfigType["variants"]["labelPosition"];
    size: keyof switchConfigType["variants"]["size"];
    radius: keyof switchConfigType["variants"]["radius"];
  };
}

export interface switchProps
  extends React.HTMLAttributes<HTMLTableElement>,
    VariantProps<typeof switchVariants> {
  label?: React.ReactNode;
  description?: string;
  bgcolor?: string;
  labelPosition?: keyof switchConfigType["variants"]["labelPosition"];
  size:? keyof switchConfigType["variants"]["size"];
  radius?: keyof switchConfigType["variants"]["radius"];
  disabled?: boolean;
}
