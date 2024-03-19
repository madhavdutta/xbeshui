import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../../utils";

const switchVariants = cva("", {
  variants: {
    labelPosition: {
      default: "",
      left: "",
      right: "",
    },
    size: {
      default: "h-5 w-9",
      xs: "h-3 w-7",
      sm: "h-4 w-8",
      md: "h-5 w-9",
      lg: "h-6 w-10",
      xl: "h-7 w-12",
    },
    radius: {
      default: "rounded-full",
      xs: "rounded-xs",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
    disabled: {
      disable: "",
      true: "opacity-50 cursor-not-allowed",
    },
    error: {
      disable: "",
      true: "border-red-500",
    },
  },
  defaultVariants: {
    labelPosition: "default",
    size: "default",
    radius: "default",
    disabled: "disable",
    error: "disable",
  },
});

export interface switchProps
  extends React.HTMLAttributes<HTMLTableElement>,
    VariantProps<typeof switchVariants> {
  label?: React.ReactNode;
  description?: string;
  bgcolor?: string;
  labelPosition?: "default" | "left" | "right";
  size?: "default" | "xs" | "sm" | "md" | "lg" | "xl";
  radius?: "default" | "xs" | "sm" | "md" | "lg" | "xl";
  disabled?: "disable" | boolean;
  error?: "disable" | boolean;
}

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
      error,
      label,
      description,
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
              disabled,
              error,
              className,
            })
          )}
          {...props}
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
