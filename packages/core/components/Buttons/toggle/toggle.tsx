import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { type VariantProps } from "class-variance-authority"
import { toggleVariants } from "./toggle.config"
import { cn } from "../../../../utils";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => {
  useXbeshProviderCheck();
  return(  
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />

)
})

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }