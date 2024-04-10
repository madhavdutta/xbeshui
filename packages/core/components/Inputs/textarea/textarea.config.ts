import { VariantProps, cva } from "class-variance-authority";
import { TextareaConfigType } from "./textareaType";
const textareaConfig: TextareaConfigType = {
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
export const textareaVariants = cva(
  "bg-background text-primary-foreground flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  textareaConfig
);


export interface TextareaProps
  extends React.HTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  label?: React.ReactNode;
  description?: string;
  labelPosition?: keyof TextareaConfigType["variants"]["labelPosition"];
  radius?: keyof TextareaConfigType["variants"]["radius"];
  variant?: keyof TextareaConfigType["variants"]["variant"];
  size?: keyof TextareaConfigType["variants"]["size"];
  disabled?: boolean;
  error?:boolean;
  placeholder?:string;
}