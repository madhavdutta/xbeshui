import * as React from "react";

import { cn } from "../../../../utils";
import { groupVariant } from "./group.config";
import { GroupProps } from "./groupType";
// import "../Theme/xbeshDefaultUIStyles.css";

const Group = React.forwardRef<HTMLDivElement, GroupProps>(
  ({ className, justify, align, gap, wrap, ...props }, ref) => {
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
