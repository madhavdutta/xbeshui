import * as React from "react";
import { IconCheck } from "@tabler/icons-react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cn } from "../../../../utils";
import { radiogroupprops } from "./radio.d";
import { Text } from "../../Typography/text/text";

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
    size: string;
  }
>(({ className, label, size, ...props }, ref) => {
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
      <Text className={`text-${size}`}>{label}</Text>
    </>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
