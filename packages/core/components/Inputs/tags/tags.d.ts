export interface tagsConfigType {
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
  };
  defaultVariants: {
    labelPosition: keyof tagsConfigType["variants"]["labelPosition"];
    radius: keyof tagsConfigType["variants"]["radius"];
    variant: keyof tagsConfigType["variants"]["variant"];
  };
}

export interface TagsInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof tagInputVariants> {
  className?: string;
  placeholder?: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  labelPosition?: keyof tagsConfigType["variants"]["labelPosition"];
  radius?: keyof tagsConfigType["variants"]["radius"];
  variant?: keyof tagsConfigType["variants"]["variant"];
  disabled?: boolean;
  data?: string[];
  allowDuplicates?: boolean;
  maxTags?: number;
}
