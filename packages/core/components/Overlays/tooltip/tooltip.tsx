import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "../../../../utils";

interface Tooltiptype {
  trigger: React.ReactNode;
  content: React.ReactNode;
  sideOffset?: number;
  duration?: number; // Added duration prop
}

const Tooltip = ({
  trigger,
  content,
  sideOffset,
  duration = 1,
}: Tooltiptype) => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    let timeout: number;

    if (visible) {
      timeout = setTimeout(() => {
        setVisible(false);
      }, duration * 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [visible, duration]);

  return (
    <TooltipProvider>
      <TooltipMain>
        <TooltipTrigger
          asChild
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
        >
          {trigger}
        </TooltipTrigger>
        {visible && (
          <TooltipContent sideOffset={sideOffset}>{content}</TooltipContent>
        )}
      </TooltipMain>
    </TooltipProvider>
  );
};
Tooltip.displayName = "Tooltip";

const TooltipProvider = TooltipPrimitive.Provider;

const TooltipMain = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export {
  Tooltip,
  TooltipMain,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
};
