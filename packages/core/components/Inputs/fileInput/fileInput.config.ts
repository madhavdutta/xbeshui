import { cva } from "class-variance-authority";
import { FileInputConfigType } from "./fileInputType";

const fileInputConfig: FileInputConfigType = {
  variants: {
    variant: {
      default: "none",
      filled: "bg-gray-200",
      unstyled: "border-0 shadow-none",
    },

    labelPosition: {
      default: "",
      right: "",
      left: "",
    },
    size: {
      default: "w-4/6",
      xs: "w-3/12",
      sm: "w-4/12",
      md: "w-3/6",
      lg: "w-4/6",
      xl: "w-5/6",
      full: "w-full",
    },

    radius: {
      default: "rounded-none",
      xs: "rounded-xs",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
    error: {
      default: "",
      true: "border-red-500 text-red-500",
      false: "",
    },
  },
  defaultVariants: {
    labelPosition: "default",
    radius: "default",
    variant: "default",
    size: "default",
  },
};

export const fileInputVariants = cva(
  "bg-background text-primary-foreground w-full h-9 rounded-md border border-input bg-transparent text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  fileInputConfig
);

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
  labelPosition?: keyof FileInputConfigType["variants"]["labelPosition"];
  radius?: keyof FileInputConfigType["variants"]["radius"];
  variant?: keyof FileInputConfigType["variants"]["variant"];
  size: keyof FileInputConfigType["variants"]["size"];
  error?: boolean;
  disabled?: boolean;
}