import * as React from "react";

import { cn } from "../../../../utils";
import { GroupProps, groupVariant } from "./group.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

// import "../Theme/xbeshDefaultUIStyles.css";

const Group = React.forwardRef<HTMLDivElement, GroupProps>(
  ({ className, justify, align, gap, wrap, ...props }, ref) => {
    useXbeshProviderCheck();
    return (
      <div
        className={cn(groupVariant({ justify, align, gap, wrap, className }))}
        ref={ref}
        {...props}
      >
        {props.children}
      </div>
    );
  }
);
Group.displayName = "Group";

export { Group };
