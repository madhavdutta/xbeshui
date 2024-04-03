import React from "react";
import { FlexBoxProps } from "./flexBoxType";
import { cn } from "../../../../utils";
import { flexBoxVariants } from "./flexBox.config";

const FlexBox = React.forwardRef<HTMLDivElement, FlexBoxProps>(
  ({ children, direction, justify, align, wrap, className, ...props }, ref) => {
    const getGap = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        return "0.5rem";
      } else if (screenWidth < 768) {
        return "1rem";
      } else if (screenWidth < 1024) {
        return "1.5rem";
      } else {
        return "2rem";
      }
    };

    const flexStyle: React.CSSProperties = {
      gap: getGap(),
    };

    return (
      <div
        className={cn(
          flexBoxVariants({ justify, align, direction, wrap, className })
        )}
        style={flexStyle}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

FlexBox.displayName = "FlexBox";

export { FlexBox };
