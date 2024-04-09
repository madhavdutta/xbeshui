export interface TextareaConfigType {
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
    size: {
      default: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      full: string;
    };
    radius: {
      default: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    error: {
      default: string;
      true: string;
      false: string;
    };
  };
  defaultVariants: {
    labelPosition: keyof TextareaConfigType["variants"]["labelPosition"];
    radius: keyof TextareaConfigType["variants"]["radius"];
    variant: keyof TextareaConfigType["variants"]["variant"];
    size: keyof TextareaConfigType["variants"]["size"];
  };
}