export interface TagsinputConfigType {
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
    labelPosition: keyof TagsinputConfigType["variants"]["labelPosition"];
    radius: keyof TagsinputConfigType["variants"]["radius"];
    variant: keyof TagsinputConfigType["variants"]["variant"];
    width: keyof TagsinputConfigType["variants"]["width"];
  };
}