import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "../../../../utils";
import type { DynamicPopoverProps } from "./popoverType";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

interface PopoverComponent<T extends React.ElementType = typeof PopoverPrimitive.Root & DynamicPopoverProps>
  extends React.ForwardRefExoticComponent<
    Omit<React.ComponentPropsWithoutRef<T>, "ref"> &
    React.RefAttributes<React.ElementRef<T>>
  > {
  Trigger: typeof PopoverTrigger;
  Content: typeof PopoverContent;
}

const Popover = PopoverPrimitive.Root as PopoverComponent;
const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => {

  useXbeshProviderCheck();
  return <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-sm border bg-popover border-input p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props} />
  </PopoverPrimitive.Portal>;
});

PopoverContent.displayName = PopoverPrimitive.Content.displayName;

(Popover as PopoverComponent).Trigger = PopoverTrigger;
(Popover as PopoverComponent).Content = PopoverContent;

export { Popover };