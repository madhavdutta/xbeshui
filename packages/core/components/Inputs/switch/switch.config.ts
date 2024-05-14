import { cva, type VariantProps } from "class-variance-authority";
import type { SwitchConfigType } from "./switchType";

const switchConfig: SwitchConfigType = {
  variants: {
    size: {
      default: "",
      xs: "h-3 w-7",
      sm: "h-4 w-8",
      md: "h-5 w-9",
      lg: "h-6 w-10",
      xl: "h-7 w-11",
    },
    thumbSize: {
      default: "",
      xs: "h-2 w-2",
      sm: "h-3 w-3",
      md: "h-4 w-4",
      lg: "h-5 w-5",
      xl: "h-6 w-6",
    },
    radius: {
      default: "rounded-full",
      xs: "rounded-xs",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    size: "default",
    thumbSize: "default",
    radius: "default",
  },
};

export const switchVariants = cva("bg-background font-default text-foreground", switchConfig);

export interface SwitchProps
  extends React.HTMLAttributes<HTMLTableElement>,
  VariantProps<typeof switchVariants> {
  description?: string;
  bgcolor?: string;
  size: keyof SwitchConfigType["variants"]["size"]
  thumbSize: keyof SwitchConfigType["variants"]["thumbSize"];
  radius?: keyof SwitchConfigType["variants"]["radius"];
  disabled?: boolean;
}
