export interface CheckboxConfigType {
  variants: {
    variant: {
      default: string;
      filled: string;
      outline: string;
    },
    radius: {
      default: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    size: {
      default: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
   
  },
  defaultVariants: {
    variant: keyof CheckboxConfigType["variants"]["variant"];
    radius: keyof CheckboxConfigType["variants"]["radius"];
    size: keyof CheckboxConfigType["variants"]["size"];
  };
}