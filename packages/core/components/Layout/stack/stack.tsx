import * as React from "react";

import { cn } from "../../../../utils";
import { StackProps, stackVariant } from "./stack.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

const Stack = React.forwardRef<HTMLInputElement, StackProps>(
  ({ className, height, justify, gap, align, ...props }, ref) => {
    useXbeshProviderCheck();
    return (
      <div
        style={{ height: height }}
        className={cn(stackVariant({ justify, gap, align, className }))}
        ref={ref}
        {...props}
      >
        {props.children}
      </div>
    );
  }
);
Stack.displayName = "Stack";

export { Stack };
