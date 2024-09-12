import React from "react";
import { cn } from "../../../../utils";
import { type SimpleGridProps, simpleGridVariant } from "./simpleGrid.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

const SimpleGrid = React.forwardRef<HTMLDivElement, SimpleGridProps>(
  ({ cols, spacing = "base", verticalSpacing = "base", children, className }, ref) => {
    useXbeshProviderCheck();

    const colsValue = typeof cols === "object" ? Object.entries(cols).map(([breakpoint, count]) => {
      return breakpoint === "base" ? `grid-cols-${count}` : `${breakpoint}:grid-cols-${count}`;
    }).join(" ") : `grid-cols-${cols}`;

    return (
      <div
        ref={ref}
        className={cn(
          "grid w-full",
          simpleGridVariant({
            spacing,
            verticalSpacing,
            className,
          }),
          colsValue
        )}
      >
        {children}
      </div>
    );
  }
);

SimpleGrid.displayName = "SimpleGrid";

export { SimpleGrid };