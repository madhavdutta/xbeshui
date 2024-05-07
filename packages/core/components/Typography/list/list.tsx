import * as React from "react";
import { cn } from "../../../../utils";
import { listVariants, type ListItemProps, type ListProps, } from "./list.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ children, className, ...props }, ref) => {
    useXbeshProviderCheck();
    return (
      <li ref={ref} className={className} {...props}>
        {children}
      </li>
    );
  }
);

ListItem.displayName = "ListItem";

const List = React.forwardRef<HTMLOListElement, ListProps>(
  ({ children, className, type, fontSize, position, ...props }, ref) => {
    return (
      <ol
        ref={ref}
        className={cn(className, listVariants({ type, fontSize, position }))}
        {...props}
      >
        {children}
      </ol>
    );
  }
);

List.displayName = "List";

interface ListComponentProps extends ListProps {
  children: React.ReactNode;
}

const ListComponent: React.FC<ListComponentProps> = (props) => {
  const { children, ...restProps } = props;
  return (
    <List {...restProps}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === ListItem) {
          return child;
        }
        return <ListItem>{child}</ListItem>;
      })}
    </List>
  );
};

const ListComponentWithItem = Object.assign(ListComponent, {
  Item: ListItem,
});

export { ListComponentWithItem as List };