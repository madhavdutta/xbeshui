import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { Text } from "../../Typography/text/text";
import { cn } from "../../../../utils";
import { SeparatorProps, separatorVariant } from "./separator.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    {
      className,
      orientation = "horizontal",
      decorative = true,
      label,
      variant,
      labelSize = "sm",
      labelPosition,
      ...props
    },
    ref
  ) => {
    useXbeshProviderCheck();

    // Define the margin class name based on label position
    const marginClass =
      labelPosition === "left" ? "mr-2" : labelPosition === "right" ? "ml-2" : "mx-auto";

    if (label) {
      return (
        <div className="flex items-center relative">
          {labelPosition !== "center" && label && (
            <Text size={labelSize} className={cn(marginClass, "whitespace-nowrap")}>
              {label}
            </Text>
          )}
          <div className="flex-grow">
            <SeparatorPrimitive.Root
              ref={ref}
              decorative={decorative}
              orientation={orientation}
              className={cn(
                separatorVariant({ variant, className }),
                "h-[1px] w-full"
              )}
              {...props}
            />
          </div>
          {labelPosition === "center" && label && (
            <Text
              size={labelSize}
              className="absolute left-1/2 transform -translate-x-1/2 bg-white px-2 whitespace-nowrap"
            >
              {label}
            </Text>
          )}
        </div>
      );
    }

    return (
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(
          "shrink-0 bg-border",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className
        )}
        {...props}
      />
    );
  }
);

Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
