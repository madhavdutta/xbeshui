import * as React from "react";

import { cn } from "../../../../utils";
import { StackProps, stackVariant } from "./stack.config";

const Stack = React.forwardRef<HTMLInputElement, StackProps>(
  ({ className, height, justify, gap, align, ...props }, ref) => {
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
