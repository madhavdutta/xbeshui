import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "../../../../utils";
import { switchVariants } from "./switch.config";
import { switchProps } from "./switchType";
import { Text } from "../../Typography/text/text";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & switchProps
>(({ className, size, radius, label, disabled, ...props }, ref) => {
  const thumbSize =
    size === "default"
      ? "h-4 w-5"
      : size === "xs"
      ? "h-3 w-3"
      : size === "sm"
      ? "h-3 w-4"
      : size === "md"
      ? "h-4 w-5"
      : size === "lg"
      ? "h-5 w-6"
      : size === "xl"
      ? "h-7 w-7"
      : "";

  const thumbRadius =
    radius === "default"
      ? "rounded-full"
      : radius === "xs"
      ? "rounded-xs"
      : radius === "sm"
      ? "rounded-sm"
      : radius === "md"
      ? "rounded-md"
      : radius === "lg"
      ? "rounded-lg"
      : radius === "xl"
      ? "rounded-xl"
      : "";

  return (
    <div className="flex text-center gap-2">
      <SwitchPrimitives.Root
        className={cn(
          "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
          switchVariants({
            size,
            radius,
            className,
          })
        )}
        {...props}
        disabled={disabled}
        ref={ref}
      >
        <SwitchPrimitives.Thumb
          className={cn(
            "pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform",
            thumbSize,
            thumbRadius,
            "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
          )}
        />
      </SwitchPrimitives.Root>
      <Text className={`text-${size}`}>{label}</Text>
    </div>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
