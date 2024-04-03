import { cva } from "class-variance-authority";
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
  "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
  progressVariantConfig
);
