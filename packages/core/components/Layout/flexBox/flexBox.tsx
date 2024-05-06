import React, { useState, useEffect } from "react";
import { cn } from "../../../../utils";
import { flexBoxVariants, type FlexBoxProps } from "./flexBox.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

const FlexBox = React.forwardRef<HTMLDivElement, FlexBoxProps>(
  ({ children, direction, justify, align, wrap, className, ...props }, ref) => {
    useXbeshProviderCheck();

    const [gap, setGap] = useState(getGap());

    function getGap() {
      const screenWidth = window.innerWidth;
      if (screenWidth < 480) {
        return "0.5rem";
      }
      if (screenWidth < 991) {
        return "1rem";
      }
      return "1.5rem";
    }

    useEffect(() => {
      function handleResize() {
        setGap(getGap());
      }

      // Only attach event listener on client side
      if (typeof window !== "undefined") {
        window.addEventListener("resize", handleResize);
      }

      return () => {
        // Clean up event listener on unmount
        if (typeof window !== "undefined") {
          window.removeEventListener("resize", handleResize);
        }
      };
    }, []);

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
