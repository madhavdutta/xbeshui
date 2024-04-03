import * as React from "react";

import { cn } from "../../../../utils";
import { SkeletonProps } from "./skeletonType";
import { skeletonVariants } from "./skeleton.config";

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
