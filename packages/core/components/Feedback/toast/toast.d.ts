export interface toastVariantsConigType {
  variants: {
    variant: {
      default: string;
      success: string;
      warning: string;
      notice: string;
      destructive: string;
      outline: string;
      secondary: string;
      ghost: string;
    };
  };
  defaultVariants: {
    variant: keyof toastVariantsConigType["variants"]["variant"];
  };
}
