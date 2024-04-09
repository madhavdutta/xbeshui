export interface SheetVarientConfigType {
  variants: {
    side: {
      default: string;
      top: string;
      bottom: string;
      left: string;
      right: string;
    };
    size: {
      default: string;
      full: string;
      xl: string;
      lg: string;
      md: string;
      sm: string;
      xs: string;
    };
    fontFamily: {
      default: string;
      serif: string;
      mono: string;
      sans: string;
    };
  };
  defaultVariants: {
    side: keyof SheetVarientConfigType["variants"]["side"];
    size: keyof SheetVarientConfigType["variants"]["size"];
    fontFamily: keyof SheetVarientConfigType["variants"]["fontFamily"];
  };
}


