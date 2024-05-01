export interface SwitchConfigType {
  variants: {
    size: {
        default: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      }
      thumbSize: {
        default: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
    radius: {
      default: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      full: string;
    };
  };
  defaultVariants: {
    size: keyof SwitchConfigType["variants"]["size"];
    thumbSize: keyof SwitchConfigType["variants"]["thumbSize"];
    radius: keyof SwitchConfigType["variants"]["radius"];
  };
}
