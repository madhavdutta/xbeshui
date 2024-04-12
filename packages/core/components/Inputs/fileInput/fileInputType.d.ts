export interface FileInputConfigType {
  variants: {
    variant: {
      default: string;
      filled: string;
      unstyled: string;
    };

    labelPosition: {
      default: string;
      right: string;
      left: string;
    };
    width: {
      default: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      full: string;
    };
    error: {
      default: string;
      true: string;
      false: string;
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
    labelPosition: keyof FileInputConfigType["variants"]["labelPosition"];
    radius: keyof FileInputConfigType["variants"]["radius"];
    variant: keyof FileInputConfigType["variants"]["variant"];
    width: keyof FileInputConfigType["variants"]["width"];
  };
}
