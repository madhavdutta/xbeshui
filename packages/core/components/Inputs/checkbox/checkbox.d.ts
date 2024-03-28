export interface checkboxConfigType {
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
    variant: keyof checkboxConfigType["variants"]["variant"];
    radius: keyof checkboxConfigType["variants"]["radius"];
    size: keyof checkboxConfigType["variants"]["size"];
  };
}

export interface checkboxProps
  extends React.HTMLAttributes<HTMLTableElement>,
    VariantProps<typeof checkboxVariants> {
  label: React.ReactNode;
  variant?: keyof checkboxConfigType["variants"]["variant"];
  radius?: keyof checkboxConfigType["variants"]["radius"];
  size?: keyof checkboxConfigType["variants"]["size"];
  disabled?:boolean
}
