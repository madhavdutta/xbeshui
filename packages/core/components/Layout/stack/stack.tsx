import * as React from "react";

import { cn } from "../../../../utils";
import { stackVariant } from "./stack.config";
import { StackProps } from "./stack.d";

const Stack = React.forwardRef<HTMLInputElement, StackProps>(
  ({ className, justify, gap, grow, align, ...props }, ref) => {
    return (
      <div
        className={cn(stackVariant({ justify, gap, grow, align, className }))}
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
