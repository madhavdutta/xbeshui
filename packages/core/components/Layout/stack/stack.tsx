import * as React from "react";

import { cn } from "../../../../utils";
import { stackVariant } from "./stack.config";
import { StackProps } from "./stackType";

const Stack = React.forwardRef<HTMLInputElement, StackProps>(
  ({ className, justify, gap, align, ...props }, ref) => {
    return (
      <div
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
