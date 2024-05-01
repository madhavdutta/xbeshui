import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { cn } from "../../../../utils";
import { IconChevronDown } from "@tabler/icons-react";
import { Link } from "@radix-ui/react-navigation-menu";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

type NavigationMenuItem = {
  title?: string;
  href?: string;
  description?: string;
  special?: boolean;
};

type NavigationMenuSection = {
  title?: string;
  items?: NavigationMenuItem[];
  href?: string;
  dropdown: boolean;
};

type NavigationMenuProps = {
  sections: NavigationMenuSection[];
};

interface NavigationMenuComponent<T extends React.ElementType = typeof NavigationMenuPrimitive.Root>
  extends React.ForwardRefExoticComponent<
    Omit<React.ComponentPropsWithoutRef<T>, "ref"> &
      React.RefAttributes<React.ElementRef<T>>
  > {
  Main: typeof NavigationMenuMain;
  List: typeof NavigationMenuList;
  Item: typeof NavigationMenuItem;
  Trigger: typeof NavigationMenuTrigger;
  Content: typeof NavigationMenuContent;
  Link: typeof NavigationMenuLink;
  Viewport: typeof NavigationMenuViewport;
  Indicator: typeof NavigationMenuIndicator;
}

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> &
    NavigationMenuProps
>(({ sections, ...props }, ref) => {
  useXbeshProviderCheck();
  return (
    <NavigationMenu.Main ref={ref} {...props}>
      <NavigationMenu.List>
        {sections.map(
          (section, index) =>
            section.dropdown && (
              <NavigationMenu.Item key={index}>
                <NavigationMenu.Trigger>{section.title}</NavigationMenu.Trigger>
                <NavigationMenu.Content>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {/* Special first item */}
                    {section?.items?.map(
                      (item, itemIndex) =>
                        item.special && (
                          <li className="row-span-3" key={itemIndex}>
                            <NavigationMenu.Link asChild>
                              <a
                                className="flex h-full w-full select-none flex-col justify-end rounded-sm bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                href={item.href}
                              >
                                <img
                                  src="https://xbesh.dev/logo.png"
                                  className="h-6 w-6"
                                />
                                <div className="mb-2 mt-4 text-lg font-medium">
                                  {item.title}
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                  {item.description}
                                </p>
                              </a>
                            </NavigationMenu.Link>
                          </li>
                        )
                    )}
                    {section.items?.map(
                      (item, itemIndex) =>
                        !item.special && (
                          <NavListItem
                            key={itemIndex}
                            href={item.href}
                            title={item.title}
                          >
                            {item.description}
                          </NavListItem>
                        )
                    )}
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            )
        )}
        {sections.map(
          (items, itemindex) =>
            !items.dropdown && (
              <NavigationMenu.Item key={itemindex}>
                <Link href={items.href}>
                  <NavigationMenu.Link
                    className={navigationMenuTriggerStyle()}
                  >
                    {items.title}
                  </NavigationMenu.Link>
                </Link>
              </NavigationMenu.Item>
            )
        )}
      </NavigationMenu.List>
    </NavigationMenu.Main>
  );
}) as NavigationMenuComponent;

NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuMain = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenu.Viewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenuMain.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-sm text-accent-foreground bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <IconChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      " left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-sm border bg-popover border-input text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;

const NavListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenu.Link asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-sm p-3 leading-none no-underline outline-none text-accent-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenu.Link>
    </li>
  );
});
NavListItem.displayName = "NavListItem";

(NavigationMenu as NavigationMenuComponent).Main = NavigationMenuMain;
(NavigationMenu as NavigationMenuComponent).List = NavigationMenuList;
(NavigationMenu as NavigationMenuComponent).Item = NavigationMenuItem;
(NavigationMenu as NavigationMenuComponent).Trigger = NavigationMenuTrigger;
(NavigationMenu as NavigationMenuComponent).Content = NavigationMenuContent;
(NavigationMenu as NavigationMenuComponent).Link = NavigationMenuLink;
(NavigationMenu as NavigationMenuComponent).Viewport = NavigationMenuViewport;
(NavigationMenu as NavigationMenuComponent).Indicator = NavigationMenuIndicator;

export { NavigationMenu,NavListItem };