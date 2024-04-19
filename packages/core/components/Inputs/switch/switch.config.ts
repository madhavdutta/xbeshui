import { VariantProps, cva } from "class-variance-authority";
import { SwitchConfigType } from "./switchType";

const switchConfig: SwitchConfigType = {
  variants: {
    labelPosition: {
      default: "",
      left: "",
      right: "",
    },
    size: {
      default: "h-5 w-10",
      xs: "h-4 w-8",
      sm: "h-4 w-9",
      md: "h-5 w-10",
      lg: "h-6 w-11",
      xl: "h-8 w-12",
    },
    radius: {
      default: "rounded-full",
      xs: "rounded-xs",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
  },
  defaultVariants: {
    labelPosition: "default",
    size: "default",
    radius: "default",
  },
};

export const switchVariants = cva("bg-background text-secondary-foreground", switchConfig);

export interface SwitchProps
  extends React.HTMLAttributes<HTMLTableElement>,
    VariantProps<typeof switchVariants> {
  label?: React.ReactNode;
  description?: string;
  bgcolor?: string;
  labelPosition?: keyof SwitchConfigType["variants"]["labelPosition"];
  size?: keyof SwitchConfigType["variants"]["size"];
  radius?: keyof SwitchConfigType["variants"]["radius"];
  disabled?: boolean;
}