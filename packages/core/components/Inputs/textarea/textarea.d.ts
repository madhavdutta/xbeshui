export interface textareaConfigType {
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
    labelPosition: keyof textareaConfigType["variants"]["labelPosition"];
    radius: keyof textareaConfigType["variants"]["radius"];
    variant: keyof textareaConfigType["variants"]["variant"];
    size: keyof textareaConfigType["variants"]["size"];
  };
}

export interface textareaProps
  extends React.HTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  label?: React.ReactNode;
  description?: string;
  labelPosition?: keyof textareaConfigType["variants"]["labelPosition"];
  radius?: keyof textareaConfigType["variants"]["radius"];
  variant?: keyof textareaConfigType["variants"]["variant"];
  size?: keyof textareaConfigType["variants"]["size"];
  disabled?: boolean;
  error?:boolean;
  placeholder?:string;
}
