import * as React from "react";

import { cn } from "../../../../utils";
import { groupVariant } from "./group.config";
import { GroupProps } from "./group.d";
// import "../Theme/xbeshDefaultUIStyles.css";

const Group = React.forwardRef<HTMLDivElement, GroupProps>(
  ({ className, justify, align, gap, ...props }, ref) => {
    return (
      <div
        className={cn(groupVariant({ justify, align, gap, className }))}
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
