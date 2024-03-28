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
    labelPosition: keyof textareaConfigType["variants"]["labelPosition"];
    radius: keyof textareaConfigType["variants"]["radius"];
    variant: keyof textareaConfigType["variants"]["variant"];
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
  disabled?: boolean;
}
