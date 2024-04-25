import * as React from "react";

import { cn } from "../../../../utils";
import { ContainerProps, containerVariant } from "./container.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";


const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, justify, items, p, size, fluid, ...props }, ref) => {
    useXbeshProviderCheck();
    return (
      <div
        className={cn(
          containerVariant({ justify, items, size, p, className }),
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
