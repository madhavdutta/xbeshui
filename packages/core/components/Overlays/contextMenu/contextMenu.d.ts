import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
type ContextMenuSubTriggerType = React.ElementRef<
  typeof ContextMenuPrimitive.SubTrigger
> &
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  };

type ContextMenuSubContentType = React.ElementRef<
  typeof ContextMenuPrimitive.SubContent
> &
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>;

type ContextMenuContentType = React.ElementRef<
  typeof ContextMenuPrimitive.Content
> &
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>;

type ContextMenuItemType = React.ElementRef<typeof ContextMenuPrimitive.Item> &
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
  };
type ContextMenuCheckboxType = React.ElementRef<
  typeof ContextMenuPrimitive.CheckboxItem
> &
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>;

type ContextMenuRadioItemType = React.ElementRef<
  typeof ContextMenuPrimitive.RadioItem
> &
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>;

type ContextMenuLabelType = React.ElementRef<
  typeof ContextMenuPrimitive.Label
> &
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
  };

type ContextMenuSeparatorType = React.ElementRef<
  typeof ContextMenuPrimitive.Separator
> &
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>;

type ContextMenuShortcutType = React.HTMLAttributes<HTMLSpanElement>;

export {
  ContextMenuSubTriggerType,
  ContextMenuSubContentType,
  ContextMenuContentType,
  ContextMenuItemType,
  ContextMenuCheckboxType,
  ContextMenuRadioItemType,
  ContextMenuLabelType,
  ContextMenuSeparatorType,
  ContextMenuShortcutType,
};
