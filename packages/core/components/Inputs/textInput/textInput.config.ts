import { cva, type VariantProps } from "class-variance-authority";
import type { InputConfigType } from "./textInputType";

const inputConfig: InputConfigType = {
  variants: {
    variant: {
      default: "none",
      filled: "bg-muted text-foreground",
      unstyled: "border-0 shadow-none",
      outline: "border-2 shadow-none"
    },
    labelPosition: {
      default: "text-left",
      right: "text-right",
      left: "text-left",
    },
    width: {
      default: "w-full",
      xs: "w-3/12",
      sm: "w-4/12",
      md: "w-3/6",
      lg: "w-4/6",
      xl: "w-5/6",
      full: "w-full",
    },
    radius: {
      default: "rounded-sm",
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
    width: "default",
  },
};

export const inputVariants = cva(
  "bg-background font-default text-foreground w-full h-9 border border-input text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  inputConfig
);


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
  labelPosition?: keyof InputConfigType["variants"]["labelPosition"];
  radius?: keyof InputConfigType["variants"]["radius"];
  width?: keyof InputConfigType["variants"]["width"];
  variant?: keyof InputConfigType["variants"]["variant"];
  error?: boolean;
  disabled?: boolean;
}
