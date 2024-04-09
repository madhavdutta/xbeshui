export interface SwitchConfigType {
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
    labelPosition: keyof SwitchConfigType["variants"]["labelPosition"];
    size: keyof SwitchConfigType["variants"]["size"];
    radius: keyof SwitchConfigType["variants"]["radius"];
  };
}
