import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { IconCheck, IconChevronRight, IconDots } from "@tabler/icons-react";

import { cn } from "../../../../utils";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

interface ContextMenuItemConfig {
  type: "item" | "sub" | "separator" | "checkbox" | "radio";
  label?: string;
  shortcut?: string;
  disabled?: boolean;
  inset?: boolean;
  checked?: boolean;
  value?: string;
  items?: ContextMenuItemConfig[];
}


interface ContextMenuProps extends ContextMenuPrimitive.ContextMenuProps {
  menuConfig: ContextMenuItemConfig[];
}

interface ContextMenuComponent<T extends React.ElementType = typeof ContextMenuPrimitive.Root> extends React.ForwardRefExoticComponent<
  Omit<React.ComponentPropsWithoutRef<T>, "ref"> & React.RefAttributes<React.ElementRef<T>>
> {
  Trigger: typeof ContextMenuTrigger;
  Content: React.FC<ContextMenuProps & React.ComponentProps<typeof ContextMenuPrimitive.Content>>;
  SubTrigger: typeof ContextMenuSubTrigger;
  SubContent: typeof ContextMenuSubContent;
  Item: typeof ContextMenuItem;
  CheckboxItem: typeof ContextMenuCheckboxItem;
  RadioItem: typeof ContextMenuRadioItem;
  Label: typeof ContextMenuLabel;
  Separator: typeof ContextMenuSeparator;
  Shortcut: typeof ContextMenuShortcut;
}

const ContextMenu = ContextMenuPrimitive.Root as ContextMenuComponent;

const ContextMenuTrigger: React.FC<React.ComponentProps<typeof ContextMenuPrimitive.Trigger>> = (props) => (
  <ContextMenuPrimitive.Trigger {...props} />
);

const ContextMenuContent: React.FC<React.ComponentProps<typeof ContextMenuPrimitive.Content> & ContextMenuProps> = ({
  menuConfig,
  ...props
}) => {
  useXbeshProviderCheck();

  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        className={cn(
          "z-50 min-w-[8rem] overflow-hidden rounded-md border border-input bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
        )}
        {...props}
      >
        {menuConfig.map((item, index) => (
          <React.Fragment key={index}>
          {item.type === "separator" ? (
            <ContextMenuSeparator />
          ) : (
            <ContextMenuItem>{item.label}</ContextMenuItem>
          )}
        </React.Fragment>
        ))}
      </ContextMenuPrimitive.Content>
    </ContextMenuPrimitive.Portal>
  );
};

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <IconChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-input bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <IconCheck className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
));
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <IconDots className="h-4 w-4 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

const ContextMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  );
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";

(ContextMenu as ContextMenuComponent).Trigger = ContextMenuTrigger;
(ContextMenu as ContextMenuComponent).Content = ContextMenuContent;
(ContextMenu as ContextMenuComponent).SubTrigger = ContextMenuSubTrigger;
(ContextMenu as ContextMenuComponent).SubContent = ContextMenuSubContent;
(ContextMenu as ContextMenuComponent).Item = ContextMenuItem;
(ContextMenu as ContextMenuComponent).CheckboxItem = ContextMenuCheckboxItem;
(ContextMenu as ContextMenuComponent).RadioItem = ContextMenuRadioItem;
(ContextMenu as ContextMenuComponent).Label = ContextMenuLabel;
(ContextMenu as ContextMenuComponent).Separator = ContextMenuSeparator;
(ContextMenu as ContextMenuComponent).Shortcut = ContextMenuShortcut;

export { ContextMenu, type ContextMenuItemConfig };