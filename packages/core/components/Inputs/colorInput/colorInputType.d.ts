export interface colorInputConfigType {
  variants: {
    variant: {
      default: string;
      filled: string;
      outline: string;
    };
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
  };
  defaultVariants: {
    variant: keyof colorInputConfigType["variants"]["variant"];
    radius: keyof colorInputConfigType["variants"]["radius"];
    size: keyof colorInputConfigType["variants"]["size"];
  };
}

export interface ColorInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof checkboxVariants> {
  label?: React.ReactNode | string;
  description?: React.ReactNode | string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  format?: "hex" | "rgb" | "hsl";
  swatches?: string[];
  swatchesPerRow?: number;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  variant?: keyof colorInputConfigType["variants"]["variant"];
  radius?: keyof colorInputConfigType["variants"]["radius"];
  size?: keyof colorInputConfigType["variants"]["size"];
}
