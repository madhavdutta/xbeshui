import { forwardRef } from "react";
import { cn } from "../../../../utils";
import { badgeVariants, type BadgeProps } from "./badge.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, leftSection, radius, rightSection, children, ...props }, ref) => {
    useXbeshProviderCheck();
    return (
      <div
        className={cn(badgeVariants({ variant, size, radius }), className)}
        ref={ref}
        {...props}
      >
        {leftSection && <span className="mr-2">{leftSection}</span>}
        {children}
        {rightSection && <span className="ml-2">{rightSection}</span>}
      </div>
    );
  }
);

Badge.displayName = "Badge";
export {Badge}