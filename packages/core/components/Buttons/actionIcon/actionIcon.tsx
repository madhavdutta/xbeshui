import { forwardRef } from "react";
import { cn } from "../../../../utils";

import { ActionIconProps } from "./actionIconType";
import { actionIconVariants } from "./actionIcon.config";

const ActionIcon = forwardRef<HTMLButtonElement, ActionIconProps>(
  ({ className, variant, size, radius, children, ...props }, ref) => {
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
