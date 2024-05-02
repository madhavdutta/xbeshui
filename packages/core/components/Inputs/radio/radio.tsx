import * as React from "react";
import { IconCheck } from "@tabler/icons-react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cn } from "../../../../utils";

import { Text } from "../../Typography/text/text";
import { RadioGroupProps, radioVariants } from "./radio.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

interface RadioOptionsItem {
  label: string
  value: string
  id: string
}

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
    radioOptions: RadioOptionsItem[];
  } & RadioGroupProps
>(({ className, variant,value, size, disabled, defaultValue, radioOptions, labelSize, ...props }, ref) => {
  useXbeshProviderCheck();
  return (
    <>
      <RadioGroupPrimitive.Root
        className={cn(radioVariants({ size, className }))}
        disabled={disabled}
        defaultValue={defaultValue}
        {...props}
        ref={ref}
      > 
        {radioOptions.map((item: RadioOptionsItem, index: number) => {
          return (
            <RadioGroupItem key={index} value={item.value} label={item.label} variant={variant} size={size} labelSize={labelSize}/>
          )
        })}
        
      </RadioGroupPrimitive.Root>
    </>
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
    label: React.ReactNode;
  } & RadioGroupProps
>(({ className, variant, label, labelSize, size, ...props }, ref) => {
  useXbeshProviderCheck();
  return (
    <div className="flex space-x-4 flex-nowrap">
      <RadioGroupPrimitive.Item
        ref={ref}
        className={cn(
          "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 justify-center items-center",
          className, radioVariants({size})
        )}
        {...props}
      >
       
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <IconCheck stroke={4} className={cn(radioVariants({ size, variant, className }), 'p-1')} />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      <Text className={cn(radioVariants({ labelSize }), 'text-nowrap')}>{label}</Text>
      
    </div>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
