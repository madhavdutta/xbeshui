import React, { useState, useEffect } from "react";
import { cn } from "../../../../utils";
import { FlexBoxProps, flexBoxVariants } from "./flexBox.config";

const FlexBox = React.forwardRef<HTMLDivElement, FlexBoxProps>(
  ({ children, direction, justify, align, wrap, className, ...props }, ref) => {
    const [gap, setGap] = useState(getGap());

    function getGap() {
      const screenWidth = window.innerWidth;
      if (screenWidth < 480) {
        return "0.5rem";
      } else if (screenWidth < 991) {
        return "1rem";
      } else {
        return "1.5rem";
      }
    }

    useEffect(() => {
      function handleResize() {
        setGap(getGap());
      }
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []); // Empty dependency array to run effect only once on mount

    const flexStyle: React.CSSProperties = {
      gap: gap,
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
