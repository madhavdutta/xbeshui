import React from "react";
import { cn } from "../../../../utils";
import { SimpleGridProps, simpleGridVariant } from "./simpleGrid.config";

const SimpleGrid = React.forwardRef<HTMLDivElement, SimpleGridProps>(
  ({ cols, spacing="md", verticalSpacing='md', children, className }, ref) => {
    const gridStyles = {
      gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
    };

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
