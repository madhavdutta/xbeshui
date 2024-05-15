import { forwardRef } from "react";
import { cn } from "../../../../utils";
// import { actionIconVariants, type ActionIconProps } from "./actionIcon.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";
import { Button } from "../button/button";
import type { ButtonProps } from "../button/button.config";

const ActionIcon = forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant'> & { variant?: Exclude<ButtonProps['variant'], 'link'> }>(
  ({ className, children, ...props }, ref) => {
    useXbeshProviderCheck();
    return (
      <Button
        className={cn(className)}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

ActionIcon.displayName = "ActionIcon";

export { ActionIcon };
