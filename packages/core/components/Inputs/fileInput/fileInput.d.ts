export interface fileInputConfigType {
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
    error: {
      default: string;
      true: string;
      false: string;
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
    labelPosition: keyof fileInputConfigType["variants"]["labelPosition"];
    radius: keyof fileInputConfigType["variants"]["radius"];
    variant: keyof fileInputConfigType["variants"]["variant"];
    size: keyof fileInputConfigType["variants"]["size"];
  };
}

export interface FileInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof fileInputVariants> {
  onFileSelect?: (file: File | null) => void;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  leftSectionWidth?: number;
  rightSectionWidth?: number;
  className?: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  labelPosition?: keyof fileInputConfigType["variants"]["labelPosition"];
  radius?: keyof fileInputConfigType["variants"]["radius"];
  variant?: keyof fileInputConfigType["variants"]["variant"];
  size: keyof fileInputConfigType["variants"]["size"];
  error?: boolean;
  disabled?: boolean;
}
