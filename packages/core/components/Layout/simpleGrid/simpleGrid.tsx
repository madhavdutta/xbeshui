import React from "react";
import { cn } from "../../../../utils";
import { SimpleGridProps, simpleGridVariant } from "./simpleGrid.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

const SimpleGrid = React.forwardRef<HTMLDivElement, SimpleGridProps>(
  ({ cols, spacing="md", verticalSpacing='md', children, className }, ref) => {
    const gridStyles = {
      gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
    };
    useXbeshProviderCheck();
    return (
      <div
        style={gridStyles}
        ref={ref}
        className={cn(
          simpleGridVariant({
            spacing,
            verticalSpacing,
            className,
          })
        )}
      >
        {children}
      </div>
    );
  }
);
SimpleGrid.displayName = "SimpleGrid";

export { SimpleGrid };
