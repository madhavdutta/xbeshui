import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "../../../../utils";

import { progressVariants, type ProgressProps } from "./progress.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & ProgressProps
>(
  (
    {
      className,
      value,
      variant,
      radius,
      bgColor,
      size,
      striped,
      animated,
      ...props
    },
    ref
  ) => {
    useXbeshProviderCheck();
    return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        progressVariants({
          variant,
          radius,
          size,
          striped,
          animated,
          className,
        })
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={`h-full w-full flex-1 ${bgColor} transition-all`}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )}
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
