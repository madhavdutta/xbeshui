import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils";

const skeletonVariants = cva(" animate-pulse rounded-md bg-primary/10", {
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
      true: "animate-pulse",
    },
  },
  defaultVariants: {
    radius: "default",
    animate: "default",
  },
});

interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
  radius?: "default" | "xs" | "sm" | "md" | "lg" | "xl";
  animate?: "default" | true;
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, radius, animate, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        skeletonVariants({
          radius,
          animate,
          className,
        })
      )}
      {...props}
    />
  )
);

Skeleton.displayName = "Skeleton";

export { Skeleton };
