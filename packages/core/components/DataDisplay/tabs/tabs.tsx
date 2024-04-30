import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "../../../../utils";
import { VariantProps } from "class-variance-authority";
import { tabsVariants } from "./tabs.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

interface TabsProps {
  variant?: "outline" | "pill" | "underline";
}

interface TabsComponent<T extends React.ElementType = typeof TabsPrimitive.Root>
  extends React.ForwardRefExoticComponent<
    Omit<React.ComponentPropsWithoutRef<T>, "ref"> &
      TabsProps &
      VariantProps<typeof tabsVariants> &
      React.RefAttributes<HTMLDivElement>
  > {
  TabsList: typeof TabsList;
  TabsTrigger: typeof TabsTrigger;
  TabsContent: typeof TabsContent;
}

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> &
    TabsProps &
    VariantProps<typeof tabsVariants>
>(({ className, variant, ...props }, ref) => {
  useXbeshProviderCheck();
  return (
    <TabsPrimitive.Root
      ref={ref}
      className={cn("flex-col", className)}
      {...props}
    />
  );
}) as TabsComponent;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> &
    TabsProps &
    VariantProps<typeof tabsVariants>
>(({ className, variant, ...props }, ref) => {
  useXbeshProviderCheck();
  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        variant === "outline"
          ? "w-full inline-flex h-[38px] rounded-md bg-transparent text-foreground border-b border-gray-300 rounded-none"
          : variant === "pill"
          ? "w-full inline-flex h-10 rounded-md bg-muted p-1 text-muted-foreground"
          : variant === "underline"
          ? "w-full inline-flex h-[38px] rounded-md bg-transparent text-foreground border-b-2 border-input rounded-none"
          : "w-full inline-flex h-[38px] rounded-md bg-transparent text-foreground border-b-2 border-input rounded-none",
        className
      )}
      {...props}
    />
  );
});

TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> &
    TabsProps &
    VariantProps<typeof tabsVariants>
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      variant === "outline"
        ? "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-transparent shadow-none rounded-none  data-[state=active]:text-foreground data-[state=active]:border-l data-[state=active]:border-t data-[state=active]:border-r data-[state=active]:border-l-gray-300 data-[state=active]:border-t-gray-300 data-[state=active]:border-r-gray-300 data-[state=active]:border-b-white data-[state=active]:border-b data-[state=active]:rounded-t-sm"
        : variant === "pill"
        ? "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
        : variant === "underline"
        ? "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-transparent shadow-none rounded-none  data-[state=active]:text-foreground data-[state=active]:border-b data-[state=active]:border-gray-600 data-[state=active]:border-b-2"
        : "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-transparent shadow-none rounded-none  data-[state=active]:text-foreground data-[state=active]:border-b data-[state=active]:border-gray-600 data-[state=active]:border-b-2",
      className
    )}
    {...props}
  />
));

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));

TabsContent.displayName = TabsPrimitive.Content.displayName;

(Tabs as TabsComponent).TabsList = TabsList;
(Tabs as TabsComponent).TabsTrigger = TabsTrigger;
(Tabs as TabsComponent).TabsContent = TabsContent;

export { Tabs };
