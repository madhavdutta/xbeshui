import * as React from "react";
import { cn } from "../../../../utils";
import * as LabelPrimitive from "@radix-ui/react-label";
import { labelVariants } from "./label.config";
import { VariantProps } from "class-variance-authority";

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, fontFamily, fontSize, fontWidth, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      labelVariants({ fontFamily, fontSize, fontWidth }),
      className
    )}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
