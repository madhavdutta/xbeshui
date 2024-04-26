import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "../../../../utils";
import { HoverCardProps } from "./hoverType";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

const HoverCard: React.FC<HoverCardProps> = ({
  triggerContent,
  cardContent,
  align = "center",
  sideOffset = 4,
  className,
}) => {
  useXbeshProviderCheck();
  return (
    <div className={className}>
      <HoverCardPrimitive.Root>
        <HoverCardPrimitive.Trigger>
          {triggerContent}
        </HoverCardPrimitive.Trigger>
        <HoverCardPrimitive.Content
          align={align || "center"}
          sideOffset={sideOffset || 4}
          className={cn(
            "z-50 w-64 rounded-md border bg-popover border-input p-4 text-popover-foreground shadow-md outline-none",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
            "data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
            "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
          )}
        >
          {cardContent}
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Root>
    </div>
  );
};

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard };
