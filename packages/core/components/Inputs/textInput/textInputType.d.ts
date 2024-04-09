export interface InputConfigType {
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
      sm:string;
      md:string;
      lg:string;
      xl:string;
      full:string;
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
    labelPosition: keyof InputConfigType["variants"]["labelPosition"];
    radius: keyof InputConfigType["variants"]["radius"];
    variant: keyof InputConfigType["variants"]["variant"];
    width: keyof InputConfigType["variants"]["width"];
  };
}