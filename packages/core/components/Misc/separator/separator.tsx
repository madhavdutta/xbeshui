import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { Text } from "../../Typography/text/text";

import { cn } from "../../../../utils";
import { SeparatorProps, sepratorVariant } from "./separator.config";


const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    {
      className,
      orientation,
      decorative = true,
      label,
      variant,
      labelSize = "sm",
      labelPosition,
      ...props
    },
    ref
  ) => (
    <div className="flex items-center relative">
      {labelPosition === "left" && label && (
        <>
          <Text size={labelSize} className="mr-2 whitespace-nowrap">
            {label}
          </Text>
          <div className="flex-grow">
            <SeparatorPrimitive.Root
              ref={ref}
              decorative={decorative}
              orientation={orientation}
              className={cn(sepratorVariant({variant,orientation, className }))}
              {...props}
            />
          </div>
        </>
      )}
      {labelPosition === "right" && label && (
        <>
          <div className="flex-grow">
            <SeparatorPrimitive.Root
              ref={ref}
              decorative={decorative}
              orientation={orientation}
              className={cn(sepratorVariant({variant,orientation, className }))}
              {...props}
            />
          </div>
          <Text size={labelSize} className="ml-2 whitespace-nowrap">
            {label}
          </Text>
        </>
      )}
      {labelPosition === "center" && label && (
        <>
          <div className="flex-grow">
            <SeparatorPrimitive.Root
              ref={ref}
              decorative={decorative}
              orientation={orientation}
              className={cn(sepratorVariant({variant,orientation, className }))}
              {...props}
            />
          </div>
          <Text
            size={labelSize}
            className="absolute left-1/2 transform -translate-x-1/2 bg-white px-2 whitespace-nowrap"
          >
            {label}
          </Text>
        </>
      )}
      {!label && (
        <SeparatorPrimitive.Root
          ref={ref}
          decorative={decorative}
          orientation={orientation}
          className={cn(sepratorVariant({variant,orientation, className }))}
          {...props}
        />
      )}
    </div>
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
