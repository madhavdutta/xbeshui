import * as React from "react";
import { IconCheck } from "@tabler/icons-react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../../utils";

const RadioVariants = cva("grid gap-2", {
  variants: {
    variant: {
      default: "rounded-none",
      filled: "",
      outline: "",
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
    size: "default",
    disabled: "default",
  },
});

export interface radiogroupprops
  extends React.HTMLAttributes<HTMLTableElement>,
    VariantProps<typeof RadioVariants> {
      variant?: 'default' | 'filled' | 'outline';
      size?: 'default' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
      disabled?: 'default' | boolean;
    }

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> &
    radiogroupprops
>(({ className, variant, size, disabled, ...props }, ref) => {
  return (
    <>
      <RadioGroupPrimitive.Root
        className={cn(variant, size, disabled, className)}
        {...props}
        ref={ref}
      />
    </>
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
    label: React.ReactNode;
  }
>(({ className, label, ...props }, ref) => {
  return (
    <>
      <RadioGroupPrimitive.Item
        ref={ref}
        className={cn(
          "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <IconCheck stroke={1.5} className="h-3.5 w-3.5 fill-primary" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      <span>{label}</span>
    </>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
