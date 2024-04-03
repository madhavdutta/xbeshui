import React from "react";
import { SimpleGridProps } from "./simpleGridType";
import { cn } from "../../../../utils";
import { simpleGridVariant } from "./simpleGrid.config";

const SimpleGrid = React.forwardRef<HTMLDivElement, SimpleGridProps>(
  ({ cols, spacing, verticalSpacing, children, className }, ref) => {
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
