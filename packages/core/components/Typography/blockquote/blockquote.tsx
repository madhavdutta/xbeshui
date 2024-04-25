import * as React from "react";
import { cn } from "../../../../utils";

import { BlockQuoteProps, blockQuoteVariants } from "./blockquote.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

// Adjust the component to forward a reference to an HTMLQuoteElement, not an HTMLParagraphElement
const BlockQuote = React.forwardRef<HTMLParagraphElement, BlockQuoteProps>(
  ({ className, size, textWrap, line, fontFamily,  color, cite, icon, mt, ...props }, ref) => {
    useXbeshProviderCheck();
    const styles = {
      color, // Assuming color is in a CSS-compatible format.
      marginTop: mt, // Ensure this is a valid CSS margin value.
    };

    return (
      <div
        style={styles}
        className={cn(className, blockQuoteVariants({ size, textWrap, line, fontFamily }))}
        ref={ref} 
        {...props}
      >
        {icon && <div className="flex flex-start">{icon}</div>}
        {props.children}
        {cite && <footer>- {cite}</footer>}
      </div>
    );
  }
);

BlockQuote.displayName = "BlockQuote";

export { BlockQuote };
