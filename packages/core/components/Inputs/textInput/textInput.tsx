import * as React from "react";

// Utility to concatenate class names

import { cn } from "../../../../utils";
import { inputVariants, type InputProps } from "./textInput.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      leftSection,
      rightSection,
      leftSectionWidth = 40,
      rightSectionWidth = 40,
      label,
      description,
      labelPosition,
      width,
      radius,
      error,
      disabled,
      variant,
      ...props
    },
    ref
  ) => {
    useXbeshProviderCheck();
    const paddingLeft = leftSection ? leftSectionWidth + 12 : 12;
    const paddingRight = rightSection ? rightSectionWidth + 12 : 12;

    return (
      <div className="flex flex-col w-full">
        {error ? (
          <>
            {" "}
            {label && (
              <label
                className={cn(
                  "flex items-center text-secondary-foreground gap-2 mb-1 text-sm font-normal text-red-500",
                  labelPosition === "right" && "flex-row-reverse"
                )}
              >
                {label}
              </label>
            )}
            {description && (
              <div
                className={cn(
                  "flex items-center gap-2 mb-1 text-sm text-red-500 font-normal",
                  labelPosition === "right" && "flex-row-reverse"
                )}
              >
                {description}
              </div>
            )}
          </>
        ) : (
          <>
            {" "}
            {label && (
              <label
                className={cn(
                  "flex items-center gap-2 mb-1 text-secondary-foreground text-sm font-normal",
                  labelPosition === "right" && "flex-row-reverse"
                )}
              >
                {label}
              </label>
            )}
            {description && (
              <div
                className={cn(
                  "flex items-center gap-2 mb-1 text-sm text-muted-foreground  font-normal",
                  labelPosition === "right" && "flex-row-reverse"
                )}
              >
                {description}
              </div>
            )}
          </>
        )}

        <div className="flex items-center w-full relative">
          {leftSection && (
            <div
              className="absolute left-0 inset-y-0 flex items-center justify-center"
              style={{ width: leftSectionWidth }}
            >
              {leftSection}
            </div>
          )}
          <input
            {...props}
            ref={ref}
            disabled={disabled}
            className={cn(
              inputVariants({ variant, error, width, radius, className })
            )}
            style={{
              paddingLeft: `${paddingLeft}px`,
              paddingRight: `${paddingRight}px`,
            }}
          />
          {rightSection && (
            <div
              className="absolute right-0 inset-y-0  flex items-center justify-center"
              style={{ width: rightSectionWidth }}
            >
              {rightSection}
            </div>
          )}
        </div>
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export { TextInput };
