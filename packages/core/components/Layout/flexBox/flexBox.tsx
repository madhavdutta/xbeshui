import React, { useState, useEffect } from "react";
import { cn } from "../../../../utils";
import { flexBoxVariants, type FlexBoxProps } from "./flexBox.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

const isClient = typeof window !== "undefined";

const FlexBoxComponent = React.forwardRef<HTMLDivElement, FlexBoxProps>(
  ({ children, direction, justify, align, wrap, className, ...props }, ref) => {
    useXbeshProviderCheck();
<<<<<<< HEAD

=======
>>>>>>> 50336a4258ebc9816d222b461206c686c556cd51
    const [gap, setGap] = useState(getGap());

    function getGap() {
      if (!isClient) return "0rem"; // Return a default value for server-side rendering

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

<<<<<<< HEAD
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
=======
      if (isClient) {
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }
    }, [getGap]);
>>>>>>> 50336a4258ebc9816d222b461206c686c556cd51

    const flexStyle: React.CSSProperties = {
      gap: gap,
    };

    return (
      <div
        className={cn(flexBoxVariants({ justify, align, direction, wrap, className }))}
        style={flexStyle}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

FlexBoxComponent.displayName = "FlexBox";

export const FlexBox = isClient ? FlexBoxComponent : React.memo(() => null);