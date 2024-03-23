import * as React from "react";

import { cn } from "../../../../utils";
import { containerVariant } from "./container.config";
import { ContainerProps } from "./container.d";

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, justify, p, size, fluid, ...props }, ref) => {
    return (
      <div
        className={cn(
          containerVariant({ justify, size, p, className }),
          fluid ? "w-full" : ""
        )}
        ref={ref}
        {...props}
      >
        {props.children}
      </div>
    );
  }
);
Container.displayName = "Container";
export { Container };
