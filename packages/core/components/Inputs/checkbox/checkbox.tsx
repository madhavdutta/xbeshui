import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { IconCheck } from "@tabler/icons-react";
import { cn } from "../../../../utils";
import { checkboxVariants } from "./checkbox.config";
import { checkboxProps } from "./checkbox.d";



const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>&checkboxProps
>(({ className,label,radius,size,variant,disabled, ...props }, ref) => (
  <label className="flex items-center space-x-2">
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(checkboxVariants({ radius,size,variant, className }))}
      disabled={disabled}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        <IconCheck stroke={1.5} className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    <span>{label}</span>
  </label>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
