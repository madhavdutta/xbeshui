import * as React from "react"
import { IconChevronDown } from "@tabler/icons-react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"

import { cn } from "../../../../utils";

const mock = {
  GETTING_STARTED_TITLE: "Getting Started",
  XBESH_UI: "XBESH UI",
  ABOUT: "XBESH UI is a collection of modern, accessible, and reusable components that help you build high-quality, responsive web applications with React.",
  navigationMenuGettingStartedMockData: [
    {
      title: "Installation",
      href: "/docs/getting-started/installation",
      description: "Learn how to install XBESH UI in your project."
    },
    {
      title: "Usage",
      href: "/docs/getting-started/usage",
      description: "Learn how to use XBESH UI in your project."
    },
    {
      title: "Theming",
      href: "/docs/getting-started/theming",
      description: "Learn how to customize the look and feel of XBESH UI."
    }
  ],
  COMPONENTS_TITLE: "Components",
  navigationMenuComponentMockData: [
    {
      title: "Accordion",
      href: "/docs/components/accordion",
      description: "A collapsible accordion component."
    },
    {
      title: "Alert",
      href: "/docs/components/alert",
      description: "A dismissible alert component."
    },
    {
      title: "Avatar",
      href: "/docs/components/avatar",
      description: "A user avatar component."
    },
    {
      title: "Badge",
      href: "/docs/components/badge",
      description: "A badge to highlight information."
    },
    {
      title: "Breadcrumb",
      href: "/docs/components/breadcrumb",
      description: "A breadcrumb navigation component."
    },
    {
      title: "Button",
      href: "/docs/components/button",
      description: "A clickable button component."
    },
    {
      title: "Card",
      href: "/docs/components/card",
      description: "A card to display content."
    },
    {
      title: "Checkbox",
      href: "/docs/components/checkbox",
      description: "A checkbox component."
    },
    {
      title: "Dialog",
      href: "/docs/components/dialog",
      description: "A modal dialog component."
    },
    {
      title: "Divider",
      href: "/docs/components/divider",
      description: "A horizontal rule to divide content."
    },
    {
      title: "Dropdown",
      href: "/docs/components/dropdown",
      description: "A dropdown menu component."

    },
  ],
  DOCUMENTATION_TITLE: "Documentation"
  }

const NavigationMenu = React.forwardRef<
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
     <NavigationMenuList>
              <NavigationMenuItem>
                  <NavigationMenuTrigger>{mock.GETTING_STARTED_TITLE}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                          <li className="row-span-3">
                              <NavigationMenuLink asChild>
                                  <a
                                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                      href="/"
                                  >
                                      {/* <Icons.logo className="h-6 w-6" /> */}
                                      <div className="mb-2 mt-4 text-lg font-medium">
                                          {mock.XBESH_UI}
                                      </div>
                                      <p className="text-sm leading-tight text-muted-foreground">
                                          {mock.ABOUT}
                                      </p>
                                  </a>
                              </NavigationMenuLink>
                          </li>
                          {mock.navigationMenuGettingStartedMockData.map((item:any) => (
                              <ListItem
                                  key={item.title}
                                  href={item.href}
                                  title={item.title}>
                                  {item.description}
                              </ListItem>
                          ))}
                      </ul>
                  </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                  <NavigationMenuTrigger>{mock.COMPONENTS_TITLE}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                          {mock.navigationMenuComponentMockData.map((component:any) => (
                              <ListItem
                                  key={component.title}
                                  title={component.title}
                                  href={component.href}
                              >
                                  {component.description}
                              </ListItem>
                          ))}
                      </ul>
                  </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
              {/* <NavigationMenuPrimitive.Link href="/docs" legacyBehavior passHref> */}
                  <NavigationMenuPrimitive.Link href="/docs"  >
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          {mock.DOCUMENTATION_TITLE}
                      </NavigationMenuLink>
                  </NavigationMenuPrimitive.Link>
              </NavigationMenuItem>
          </NavigationMenuList>
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
      <li>
          <NavigationMenuLink asChild>
              <a
                  ref={ref}
                  className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                      className
                  )}
                  {...props}
              >
                  <div className="text-sm font-medium leading-none">{title}</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {children}
                  </p>
              </a>
          </NavigationMenuLink>
      </li>
  )
})
ListItem.displayName = "ListItem"

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
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
)

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
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

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
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export {
 
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,

}

