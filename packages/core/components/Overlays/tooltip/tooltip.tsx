import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cn } from "../../../../utils/utils";

interface TooltipComponent<T extends React.ElementType = typeof TooltipPrimitive.Root>
  extends React.ForwardRefExoticComponent<
    Omit<React.ComponentPropsWithoutRef<T>, "ref"> & React.RefAttributes<React.ElementRef<T>>
  > {
  Trigger: typeof TooltipTrigger;
  Content: typeof TooltipContent;
  Provider: typeof TooltipProvider;
}

const Tooltip = TooltipPrimitive.Root as TooltipComponent;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipProvider = TooltipPrimitive.Provider;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & { side?: "top" | "bottom" | "left" | "right" }
>(({ className, sideOffset = 4, side = "bottom", ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    side={side}
    className={cn(
      "overflow-hidden rounded-sm bg-primary px-3 py-1.5 text-xs text-primary-foreground z-50 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
      {
        "data-[side=bottom]:slide-in-from-top-2": side === "bottom",
        "data-[side=left]:slide-in-from-right-2": side === "left",
        "data-[side=right]:slide-in-from-left-2": side === "right",
        "data-[side=top]:slide-in-from-bottom-2": side === "top",
      },
      className
    )}
    {...props}
  />
));

TooltipContent.displayName = TooltipPrimitive.Content.displayName;

(Tooltip as TooltipComponent).Trigger = TooltipTrigger;
(Tooltip as TooltipComponent).Content = TooltipContent;
(Tooltip as TooltipComponent).Provider = TooltipProvider;

export { Tooltip };