export interface radioConfigType {
  variants: {
    variant: {
      default: string;
      filled: string;
      outline: string;
    };
    size: {
      default: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  };
  defaultVariants: {
    variant: keyof radioConfigType["variants"]["variant"];
    size: keyof radioConfigType["variants"]["size"];
  };
}

export interface radiogroupprops
  extends React.HTMLAttributes<HTMLTableElement>,
    VariantProps<typeof RadioVariants> {
  variant?: keyof radioConfigType["variants"]["variant"];
  size?: keyof radioConfigType["variants"]["size"];
  disabled?: "default" | boolean;
}
