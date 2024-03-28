export interface inputConfigType {
  variants: {
    labelPosition: {
      default: string;
      right: string;
      left: string;
    };

    variant: {
      default: string;
      filled: string;
      unstyled: string;
    };

    radius: {
      default: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    error:{
      default: string;
      'true': string;
      'false':string
    }
  };
  defaultVariants: {
    labelPosition: keyof inputConfigType["variants"]["labelPosition"];
    radius: keyof inputConfigType["variants"]["radius"];
    variant: keyof inputConfigType["variants"]["variant"];
  };
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  leftSectionWidth?: number;
  rightSectionWidth?: number;
  className?: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  labelPosition?: keyof inputConfigType["variants"]["labelPosition"];
  radius?: keyof inputConfigType["variants"]["radius"];
  variant?: keyof inputConfigType["variants"]["variant"];
  error?:boolean;
  disabled?: boolean;
}
