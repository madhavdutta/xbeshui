import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../../../utils";
import { toggleGroupVariants } from "./toggle.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleGroupVariants>>({
  size: "default",
  variant: "default",
  radius: "md",
});

interface ToggleGroupComponent<T extends React.ElementType = typeof ToggleGroupPrimitive.Root>
  extends React.ForwardRefExoticComponent<
    Omit<React.ComponentPropsWithoutRef<T>, "ref"> &
      VariantProps<typeof toggleGroupVariants> &
      React.RefAttributes<React.ElementRef<T>>
  > {
  Item: typeof ToggleGroupItem;
}

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleGroupVariants>
>(({ className, variant, size, radius, children, ...props }, ref) => {
  useXbeshProviderCheck();

  return (
    <ToggleGroupPrimitive.Root
      ref={ref}
      className={cn("inline-flex gap-1", className)}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size, radius }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
}) as ToggleGroupComponent;

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleGroupVariants>
>(({ className, children, variant, size, radius, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);
  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleGroupVariants({
          variant: context.variant || variant,
          size: context.size || size,
          radius: context.radius || radius,
        }),
        "data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

(ToggleGroup as ToggleGroupComponent).Item = ToggleGroupItem;

export { ToggleGroup };