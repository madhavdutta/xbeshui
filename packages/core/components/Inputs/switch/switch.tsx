import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "../../../../utils";
import { switchVariants, type SwitchProps } from "./switch.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & SwitchProps
>(({ className, size, radius, thumbSize, disabled, ...props }, ref) => {
  useXbeshProviderCheck();

  return (
    <SwitchPrimitives.Root
    className={cn( switchVariants({ size, radius }), radius,
    "peer inline-flex shrink-0 cursor-pointer items-center border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", (size==="default" ? "h-4 w-9" : size) ,
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn( switchVariants({ thumbSize, radius }), radius,
      "pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0", (thumbSize==="default" ? "h-4 w-4" : thumbSize), className
      )}
    />
  </SwitchPrimitives.Root>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
