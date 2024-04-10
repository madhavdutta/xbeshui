import { VariantProps, cva } from "class-variance-authority";
import { SepratorConfigType } from "./separatorType";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

export const sepratorConfig:SepratorConfigType ={
  variants: {
    variant: {
      default: "border-solid",
      solid: "border-solid",
      dashed: "border-dashed",
      dotted: "border-dotted",
    },
    width: {
      default: "border-[0.5px]",
      xs: "border",
      md: "border-2",
      lg: "border-4",
    },
    orientation: {
      default: "h-[1px] w-full",
      horizontal: "h-[1px] w-full",
      vertical: "h-full w-[1px]",
    },
    labelSize: {
      default: "text-base",
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
      "8xl": "text-8xl",
      "9xl": "text-9xl",
    },
    labelPosition: {
      default: "",
      left: "left",
      right: "right",
      center: "center",
    },
  },
  defaultVariants: {
    variant: "default",
    width: "default",
    orientation: "default",
    labelSize: "default",
    labelPosition: "default",
  },
}

export const sepratorVariant = cva("bg-background text-primary-foreground shrink-0 bg-border",sepratorConfig);



export type SeparatorProps = {
  label?: React.ReactNode;
  decorative?: boolean;
  variant?: keyof SepratorConfigType["variants"]["variant"];
  orientation?: keyof SepratorConfigType["variants"]["orientation"];
  labelSize?: keyof SepratorConfigType["variants"]["labelSize"];
  labelPosition?: keyof SepratorConfigType["variants"]["labelPosition"];
} & React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> &
  VariantProps<typeof sepratorVariant>;