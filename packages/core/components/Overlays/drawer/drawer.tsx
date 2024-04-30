import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "../../../../utils/utils";

interface DrawerComponent<T extends React.ElementType = typeof DrawerPrimitive.Root>
  extends React.ForwardRefExoticComponent<
    Omit<React.ComponentPropsWithoutRef<T>, "ref"> &
    React.RefAttributes<React.ElementRef<T>>
  > {
  Trigger: typeof DrawerTrigger;
  Portal: typeof DrawerPortal;
  Close: typeof DrawerClose;
  Overlay: typeof DrawerOverlay;
  Content: typeof DrawerContent;
  Header: typeof DrawerHeader;
  Footer: typeof DrawerFooter;
  Title: typeof DrawerTitle;
  Description: typeof DrawerDescription;
  ref?: React.RefObject<HTMLDivElement>;
}

const InnerDrawer = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Root>,
  React.ComponentPropsWithRef<typeof DrawerPrimitive.Root> & DrawerComponent
>(({ shouldScaleBackground = true, ...props }, ref) => (
  <DrawerPrimitive.Root
    ref={ref}
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
));


InnerDrawer.displayName = "InnerDrawer";
const Drawer: DrawerComponent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Root> & DrawerComponent
>((props, ref) => <InnerDrawer {...props} ref={ref} />) as DrawerComponent;

Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
));

DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));

DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
);

DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
);

DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));

DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));

DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

(Drawer as DrawerComponent).Trigger = DrawerTrigger;
(Drawer as DrawerComponent).Portal = DrawerPortal;
(Drawer as DrawerComponent).Close = DrawerClose;
(Drawer as DrawerComponent).Overlay = DrawerOverlay;
(Drawer as DrawerComponent).Content = DrawerContent;
(Drawer as DrawerComponent).Header = DrawerHeader;
(Drawer as DrawerComponent).Footer = DrawerFooter;
(Drawer as DrawerComponent).Title = DrawerTitle;
(Drawer as DrawerComponent).Description = DrawerDescription;

export { Drawer };
