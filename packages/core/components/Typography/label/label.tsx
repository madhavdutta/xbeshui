import * as React from "react";
import { cn } from "../../../../utils";
import * as LabelPrimitive from "@radix-ui/react-label";
import { labelVariants } from "./label.config";
import type{ VariantProps } from "class-variance-authority";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, fontFamily, fontSize, fontWeight, ...props }, ref) => {
  useXbeshProviderCheck();
  return(
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      labelVariants({ fontFamily, fontSize, fontWeight }),
      className
    )}
    {...props}
  />
)});
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
