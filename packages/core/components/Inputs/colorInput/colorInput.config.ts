import { cva, type VariantProps } from "class-variance-authority";
import type { ColorInputConfigType } from "./colorInputType";
export const colorInputConfig: ColorInputConfigType = {
  variants: {
    variant: {
      default: "rounded-none",
      filled: "",
      outline: "",
    },
    radius: {
      default: "rounded-none",
      xs: "rounded-xs",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
    width: {
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
    width: "default",
  },
};
export const checkboxVariants = cva(
  "bg-background font-default text-secondary-foreground peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
  colorInputConfig
);

export interface ColorInputProps extends VariantProps<typeof checkboxVariants> {
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
  variant?: keyof ColorInputConfigType["variants"]["variant"];
  radius?: keyof ColorInputConfigType["variants"]["radius"];
  width?: keyof ColorInputConfigType["variants"]["width"];
}
