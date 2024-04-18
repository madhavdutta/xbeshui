import { VariantProps, cva } from "class-variance-authority";
import { progressVariantConfigType } from "./progressType";

const progressVariantConfig: progressVariantConfigType = {
  variants: {
    variant: {
      default: "",
    },
    radius: {
      default: "rounded-none",
      xs: "rounded",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
    size: {
      default: "h-2.5",
      xs: "h-1.5",
      sm: "h-4",
      md: "h-6",
      lg: "h-8",
      xl: "h-10",
    },
    striped: {
      default: "",
    },
    animated: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
    radius: "default",
    size: "default",
    striped: "default",
    animated: "default",
  },
};

export const progressVariants = cva(
  "text-primary-foreground relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
  progressVariantConfig
);

export interface ProgressProps extends VariantProps<typeof progressVariants> {
  value?: number;
  bgColor?: string;
  variant?: keyof progressVariantConfigType["variants"]["variant"];
  radius?: keyof progressVariantConfigType["variants"]["radius"];
  size?: keyof progressVariantConfigType["variants"]["size"];
  striped?: keyof progressVariantConfigType["variants"]["striped"];
  animated?: keyof progressVariantConfigType["variants"]["animated"];
}
