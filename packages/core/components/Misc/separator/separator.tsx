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

    if (label) {
      return (
        <div className="flex items-center relative">
          {labelPosition === "left" && label && (
            <Text
              size={labelSize}
              className={"whitespace-nowrap px-2"}
            >
              {label}
            </Text>
          )}


          {(labelPosition == "right" || labelPosition == "center") && <div className="flex-grow">
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
          }

          <div className="flex justify-center items-center">
            {labelPosition === "right" && label && (
              <Text
                size={labelSize}
                className={"whitespace-nowrap px-2"}
              >
                {label}
              </Text>
            )}
            {labelPosition === "center" && label && (
              <Text
                size={labelSize}
                className="px-2 whitespace-nowrap"
              >
                {label}
              </Text>
            )}
          </div>

          {(labelPosition == "left" || labelPosition == "center") && <div className="flex-grow">
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
          </div>}


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
