import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "../../../../utils";
import { switchVariants } from "./switch.config";
import { switchProps } from "./switch.d";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & switchProps
>(
  (
    {
      className,
      labelPosition,
      radius,
      bgcolor,
      size,
      disabled,
      label,
      ...props
    },
    ref
  ) => {
    return (
      <label className="flex items-center space-x-2">
        <SwitchPrimitives.Root
          className={cn(
            `peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:${bgcolor} data-[state=unchecked]:bg-input`,
            switchVariants({
              radius,
              size,
              className,
            })
          )}
          {...props}
          disabled={disabled}
          ref={ref}
        >
          <SwitchPrimitives.Thumb
            className={cn(
              "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
            )}
          />
        </SwitchPrimitives.Root>
        <span
          className={cn(
            "flex items-center gap-2",
            labelPosition === "left" && "flex-row-reverse"
          )}
        >
          {label}
        </span>
      </label>
    );
  }
);
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
