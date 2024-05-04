import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { VariantProps } from "class-variance-authority";
import { toggleVariants } from "./toggle.config";
import { cn } from "../../../../utils";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

interface ToggleGroupComponent<T extends React.ElementType = typeof ToggleGroupPrimitive.Root>
  extends React.ForwardRefExoticComponent<
    Omit<React.ComponentPropsWithoutRef<T>, "ref"> &
      VariantProps<typeof toggleVariants> &
      React.RefAttributes<React.ElementRef<T>>
  > {
  Item: typeof ToggleGroupItem;
}

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className,  children, ...props }, ref) => {
  useXbeshProviderCheck();
  return (
    <ToggleGroupPrimitive.Root
      ref={ref}
      className={cn(
        "flex items-center justify-center gap-1",
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Root>
  );
}) as ToggleGroupComponent;

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, radius, ...props }, ref) => {
  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({ variant, size, radius }),
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