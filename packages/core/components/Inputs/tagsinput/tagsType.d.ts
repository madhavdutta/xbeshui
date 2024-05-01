export interface TagsConfigType {
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
    labelPosition: keyof TagsConfigType["variants"]["labelPosition"];
    radius: keyof TagsConfigType["variants"]["radius"];
    variant: keyof TagsConfigType["variants"]["variant"];
    width: keyof TagsConfigType["variants"]["width"];
  };
}

