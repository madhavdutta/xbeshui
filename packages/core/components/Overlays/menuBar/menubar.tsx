/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { IconCheck, IconChevronRight, IconDots } from "@tabler/icons-react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { cn } from "../../../../utils";

type MenuBarItem = {
  label?: string;
  shortcut?: string;
  disabled?: boolean;
  type?: "normal" | "checkbox" | "radio" | "submenu";
  submenu?: { label?: string; type?: string; value?: string }[];
  inset?: boolean;
  checked?: boolean;
  value?: string;
};

type Menu = {
  label: string;
  items: MenuBarItem[];
};

type MenubarProps = {
  menus: Menu[];
};

const Menubar = ({ menus }: MenubarProps) => {
  return (
    <div>
      <MenubarMain>
        {menus.map((menu, index) => (
          <MenubarMenu key={index}>
            <MenubarTrigger>{menu.label}</MenubarTrigger>
            <MenubarContent>
              {menu.items.map((item, itemIndex) => (
                <React.Fragment key={itemIndex}>
                  {item.type === "normal" && (
                    <MenubarItem inset={item.inset} disabled={item.disabled}>
                      {item.label}
                      {item.shortcut && (
                        <MenubarShortcut>{item.shortcut}</MenubarShortcut>
                      )}
                    </MenubarItem>
                  )}
                  {item.type === "checkbox" && (
                    <MenubarCheckboxItem checked={!!item.checked}>
                      {item.label}
                    </MenubarCheckboxItem>
                  )}
                  {item.type === "submenu" && (
                    <MenubarSub>
                      <MenubarSubTrigger>{item.label}</MenubarSubTrigger>
                      <MenubarSubContent>
                        {item.submenu?.map((subItem, subIndex) => (
                          <MenubarItem key={subIndex}>
                            {subItem.label}
                          </MenubarItem>
                        ))}
                      </MenubarSubContent>
                    </MenubarSub>
                  )}
                  {item.type === "radio" && (
                    <MenubarRadioGroup value={item.value}>
                      {item?.submenu?.map((subItem, subIndex) => (
                        <MenubarRadioItem
                          key={subIndex}
                          value={subItem?.value ?? ""}
                        >
                          {subItem.label}
                        </MenubarRadioItem>
                      ))}
                    </MenubarRadioGroup>
                  )}
                </React.Fragment>
              ))}
            </MenubarContent>
          </MenubarMenu>
        ))}
      </MenubarMain>
    </div>
  );
};
Menubar.displayname = "Menubar";

// interface MenuType {
//   className: string;
//   mock: any;
// }

// const Menu = ({ className, mock }: MenuType) => {
//   return (
//     <Menubar className={className}>
//       <MenubarMenu>
//         <MenubarTrigger>{mock.FILE_MENU_TITLE}</MenubarTrigger>
//         <MenubarContent className={className}>
//           {mock.fileMenuItems.map((fItem: any, index: number) => {
//             if (fItem.hasSubMenu === false) {
//               return (
//                 <MenubarItem key={index} disabled={fItem.disabled}>
//                   {fItem.name}
//                   {fItem.menubarShortcut !== "" ? (
//                     <MenubarShortcut>{fItem.menubarShortcut}</MenubarShortcut>
//                   ) : (
//                     <MenubarShortcut></MenubarShortcut>
//                   )}
//                 </MenubarItem>
//               );
//             } else {
//               return (
//                 <MenubarSub key={index}>
//                   <MenubarSeparator />
//                   <MenubarSubTrigger>{fItem.name}</MenubarSubTrigger>
//                   <MenubarSubContent>
//                     {fItem.subMenu.map((item: any, index: number) => {
//                       <MenubarItem></MenubarItem>;
//                       return <MenubarItem key={index}>{item}</MenubarItem>;
//                     })}
//                   </MenubarSubContent>
//                   <MenubarSeparator />
//                 </MenubarSub>
//               );
//             }
//           })}
//         </MenubarContent>
//       </MenubarMenu>
//       <MenubarMenu>
//         <MenubarTrigger>{mock.EDIT_MENU_TITLE}</MenubarTrigger>
//         <MenubarContent>
//           {mock.editMenuItems.map((eItem: any, index: number) => {
//             if (eItem.hasSubMenu === false) {
//               return (
//                 <MenubarItem key={index} disabled={eItem.disabled}>
//                   {eItem.name}
//                   {eItem.menubarShortcut !== "" ? (
//                     <MenubarShortcut>{eItem.menubarShortcut}</MenubarShortcut>
//                   ) : (
//                     <MenubarShortcut></MenubarShortcut>
//                   )}
//                 </MenubarItem>
//               );
//             } else {
//               return (
//                 <MenubarSub key={index}>
//                   <MenubarSeparator />
//                   <MenubarSubTrigger>{eItem.name}</MenubarSubTrigger>
//                   <MenubarSubContent>
//                     {eItem.subMenu.map((item: any, index: number) => {
//                       <MenubarItem></MenubarItem>;
//                       return (
//                         <MenubarSub key={index}>
//                           <MenubarItem>{item.name}</MenubarItem>
//                           {item.hasSeparatorBelow && <MenubarSeparator />}
//                         </MenubarSub>
//                       );
//                     })}
//                   </MenubarSubContent>
//                   <MenubarSeparator />
//                 </MenubarSub>
//               );
//             }
//           })}
//         </MenubarContent>
//       </MenubarMenu>
//       <MenubarMenu>
//         <MenubarTrigger>{mock.VIEW_MENU_TITLE}</MenubarTrigger>
//         <MenubarContent>
//           {mock.viewMenuItems.map((vItem: any, index: any) => {
//             if (vItem.isCheckboxItem === false) {
//               return (
//                 <MenubarSub key={index}>
//                   <MenubarItem disabled={vItem.disabled} inset={vItem.inset}>
//                     {vItem.name}
//                     {vItem.menubarShortcut !== "" ? (
//                       <MenubarShortcut>{vItem.menubarShortcut}</MenubarShortcut>
//                     ) : (
//                       <MenubarShortcut></MenubarShortcut>
//                     )}
//                   </MenubarItem>
//                   {vItem.hasSeparatorBelow === true && <MenubarSeparator />}
//                 </MenubarSub>
//               );
//             } else {
//               return (
//                 <MenubarSub key={index}>
//                   <MenubarCheckboxItem
//                     disabled={vItem.disabled}
//                     checked={vItem.checked}
//                   >
//                     {vItem.name}
//                     {vItem.menubarShortcut !== "" ? (
//                       <MenubarShortcut>{vItem.menubarShortcut}</MenubarShortcut>
//                     ) : (
//                       <MenubarShortcut></MenubarShortcut>
//                     )}
//                   </MenubarCheckboxItem>
//                   {vItem.hasSeparatorBelow === true && <MenubarSeparator />}
//                 </MenubarSub>
//               );
//             }
//           })}
//         </MenubarContent>
//       </MenubarMenu>
//       <MenubarMenu>
//         <MenubarTrigger>{mock.PROFILES_MENU_TITLE}</MenubarTrigger>
//         <MenubarContent>
//           {mock.profileMenuItems.map((pItem: any, index: number) => {
//             if (pItem.isRadioItem === true) {
//               return (
//                 <MenubarSub key={index}>
//                   <MenubarRadioGroup value={pItem.defaultValue}>
//                     {pItem.radioItems.map((item: any, index: number) => {
//                       return (
//                         <MenubarRadioItem key={index} value={item.radioId}>
//                           {item.name}
//                         </MenubarRadioItem>
//                       );
//                     })}
//                   </MenubarRadioGroup>
//                   {pItem.hasSeparatorBelow === true && <MenubarSeparator />}
//                 </MenubarSub>
//               );
//             } else {
//               return (
//                 <MenubarSub key={index}>
//                   <MenubarItem inset={pItem.inset}>{pItem.name}</MenubarItem>
//                   {pItem.hasSeparatorBelow === true && <MenubarSeparator />}
//                 </MenubarSub>
//               );
//             }
//           })}
//         </MenubarContent>
//       </MenubarMenu>
//     </Menubar>
//   );
// };

const MenubarMenu = MenubarPrimitive.Menu;

const MenubarGroup = MenubarPrimitive.Group;

const MenubarPortal = MenubarPrimitive.Portal;

const MenubarSub = MenubarPrimitive.Sub;

const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

const MenubarMain = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "flex h-9 items-center space-x-1 rounded-md border border-input bg-background p-1 shadow-sm",
      className
    )}
    {...props}
  />
));
MenubarMain.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center text-secondary-foreground rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className
    )}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
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
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[12rem] overflow-hidden rounded-md border  border-input bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <IconCheck className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <IconDots className="h-4 w-4 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({
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
MenubarShortcut.displayname = "MenubarShortcut";

export {
  // Menu,
  Menubar,
  MenubarMain,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
