import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { IconCheck } from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils";

const checkboxVariants = cva("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", {
  variants: {
    variant: {
      default: "rounded-none",
      filled: "",
      outline: "",
    },

    radius: {
      default: "rounded-none",
      xs: "rounded-xs",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
    size: {
      default: "size-5",
      xs: "size-4",
      sm: "size-5",
      md: "size-6",
      lg: "size-7",
      xl: "size-8",
    },
    disabled: {
      default: "",
      true: "border",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    radius: "default",
    size: "default",
    disabled: "default",
   
  },
});

export interface checkboxProps
  extends React.HTMLAttributes<HTMLTableElement>,
    VariantProps<typeof checkboxVariants> {
      label:React.ReactNode,
      variant?: 'default' | 'filled' | 'outline';
      radius?: 'default' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
      size?: 'default' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
      disabled?: 'default' | true | false;
    }

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>&checkboxProps
>(({ className,label,radius,size,variant,disabled, ...props }, ref) => (
  <label className="flex items-center space-x-2">
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(checkboxVariants({ radius,size,variant,disabled, className }))}
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
