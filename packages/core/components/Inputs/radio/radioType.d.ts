export interface RadioConfigType {
  variants: {
    variant: {
      default: string;
      filled: string;
      outline: string;
    };
    size: {
      default: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    labelSize: {
      default: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  };
  defaultVariants: {
    variant: keyof RadioConfigType["variants"]["variant"];
    size: keyof RadioConfigType["variants"]["size"];
  };
}
