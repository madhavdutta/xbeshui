import * as React from "react";
import { cn } from "../../../../utils";
import { listVariants } from "./list.config";
import { ListProps, ListItemProps } from "./list.d";

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ className, ...props }, ref: React.Ref<HTMLLIElement>) => {
    return (
      <li className={className} {...props} ref={ref}>
        {props.children}
      </li>
    );
  }
);

ListItem.displayName = "ListItem";

const List = React.forwardRef<HTMLOListElement, ListProps>(
  (
    { className, type, fontSize, position, ...props },
    ref: React.Ref<HTMLOListElement>
  ) => {
    return (
      <ol
        className={cn(className, listVariants({ type, fontSize, position }))}
        {...props}
        ref={ref}
      >
        {props.children}
      </ol>
    );
  }
);

List.displayName = "List";

export { List, ListItem };
