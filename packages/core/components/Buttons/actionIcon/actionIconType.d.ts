export interface AcionIconConfigType {
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
      link: string;
    };
    size: {
      default: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    radius: {
      none: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      full: string;
    };
  };
  defaultVariants: {
    variant: keyof AcionIconConfigType["variants"]["variant"];
    size: keyof AcionIconConfigType["variants"]["size"];
    radius: keyof AcionIconConfigType["variants"]["radius"];
  };
}

export interface ActionIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof actionIconVariants> {
  variant?: keyof AcionIconConfigType["variants"]["variant"];
  size?: keyof AcionIconConfigType["variants"]["size"];
  radius?: keyof AcionIconConfigType["variants"]["radius"];
}
