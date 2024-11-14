import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { IconCheck } from "@tabler/icons-react";
import { cn } from "../../../../utils";
import { checkboxVariants, type CheckboxProps } from "./checkbox.config";
//import { checkboxProps } from "./checkboxType";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & CheckboxProps
>(({ className, radius, size, variant, disabled, label, ...props }, ref) => {
  useXbeshProviderCheck();
  return (
    <label className="flex items-center space-x-2">
      <CheckboxPrimitive.Root
        ref={ref}
        className={cn(checkboxVariants({ radius, size, variant, className }))}
        disabled={disabled}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={cn("flex items-center justify-center text-current")}
        >
          <IconCheck stroke={1.5} className="h-4 w-4" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {label && <span className="text-gray-600">{label}</span>}
    </label>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
