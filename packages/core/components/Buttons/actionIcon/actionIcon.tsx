import { forwardRef } from "react";
import { cn } from "../../../../utils";
import { ActionIconProps, actionIconVariants } from "./actionIcon.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

const ActionIcon = forwardRef<HTMLButtonElement, ActionIconProps>(
  ({ className, variant, size, radius, children, ...props }, ref) => {
    useXbeshProviderCheck();
    return (
      <button
        className={cn(actionIconVariants({ variant, size, radius }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

ActionIcon.displayName = "ActionIcon";

export { ActionIcon };
