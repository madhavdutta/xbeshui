import { VariantProps, cva } from "class-variance-authority";
import { CheckboxConfigType } from "./checkboxType";
export const checkboxConfig: CheckboxConfigType = {
  variants: {
    variant: {
      default: "rounded-none",
      filled: "ffvfv",
      outline: "vfvfv",
    },
    radius: {
      default: "rounded-none",
      xs: "rounded-xs",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
    size: {
      default: "size-5",
      xs: "size-4",
      sm: "size-5",
      md: "size-6",
      lg: "size-7",
      xl: "size-8",
    },
  },
  defaultVariants: {
    variant: "default",
    radius: "default",
    size: "default",
  },
};
export const checkboxVariants = cva(
  "bg-background text-primary-foreground peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
  checkboxConfig
);

export interface CheckboxProps extends React.HTMLAttributes<HTMLTableElement>, VariantProps<typeof checkboxVariants> {
  label: React.ReactNode;
  variant?: keyof CheckboxConfigType["variants"]["variant"];
  radius?: keyof CheckboxConfigType["variants"]["radius"];
  size?: keyof CheckboxConfigType["variants"]["size"];
  disabled?:boolean
}
