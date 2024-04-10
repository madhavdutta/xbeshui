export interface ColorInputConfigType {
  variants: {
    variant: {
      default: string;
      filled: string;
      outline: string;
    };
    radius: {
      default: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    width: {
      default: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  };
  defaultVariants: {
    variant: keyof ColorInputConfigType["variants"]["variant"];
    radius: keyof ColorInputConfigType["variants"]["radius"];
    width: keyof ColorInputConfigType["variants"]["width"];
  };
}

