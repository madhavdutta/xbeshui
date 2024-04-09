import { VariantProps, cva } from "class-variance-authority";
import { skeletonVariantsConfigType } from "./skeletonType";

const skeletonVariantsConfig: skeletonVariantsConfigType = {
  variants: {
    radius: {
      default: "rounded-md",
      xs: "rounded",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
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
  "animate-pulse rounded-md h-2 bg-primary/10",
  skeletonVariantsConfig
);


export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
  radius: keyof skeletonVariantsConfigType["variants"]["radius"];
  animate: keyof skeletonVariantsConfigType["variants"]["animate"];
}
