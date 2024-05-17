import { cva, type VariantProps } from "class-variance-authority";
import type { skeletonVariantsConfigType } from "./skeletonType";

const skeletonVariantsConfig: skeletonVariantsConfigType = {
  variants: {
    radius: {
      default: "rounded-sm",
      xs: "rounded",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
    animate: {
      default: "",
      pulse: "animate-pulse",
    },
  },
  defaultVariants: {
    radius: "default",
    animate: "default",
  },
};

export const skeletonVariants = cva(
  "bg-background text-primary-foreground font-default animate-pulse rounded-sm h-2 bg-primary/10",
  skeletonVariantsConfig
);


export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
  radius?: keyof skeletonVariantsConfigType["variants"]["radius"];
  animate?: keyof skeletonVariantsConfigType["variants"]["animate"];
}
