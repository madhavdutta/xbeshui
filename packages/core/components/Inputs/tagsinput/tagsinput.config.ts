import { VariantProps, cva } from "class-variance-authority";
import { TagsinputConfigType } from "./tagsinputType";
const tagsinputConfig: TagsinputConfigType = {
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
    width: {
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
    width: "default",
  },
};
export const tagsinputVariants = cva(
  "bg-background text-secondary-foreground rounded-sm text-sm focus:ring-white" ,
  tagsinputConfig
);

export interface TagsinputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof tagsinputVariants> {
  className?: string;
  placeholder?: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  labelPosition?: keyof TagsinputConfigType["variants"]["labelPosition"];
  radius?: keyof TagsinputConfigType["variants"]["radius"];
  variant?: keyof TagsinputConfigType["variants"]["variant"];
  width?: keyof TagsinputConfigType["variants"]["width"];
  disabled?: boolean;
  data?: string[];
  allowDuplicates?: boolean;
  maxTags?: number;
  error?:boolean;
}