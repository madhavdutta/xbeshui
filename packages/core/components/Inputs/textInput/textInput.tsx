import * as React from "react";

// Utility to concatenate class names

import { cn } from "../../../../utils";
import { InputProps } from "./textInput.d";
import { inputVariants } from "./textInput.config";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
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
      size,
      radius,
      error,
      disabled,
      variant,
      ...props
    },
    ref
  ) => {
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
                  "flex items-center gap-2 mb-1 text-sm font-normal text-red-500",
                  labelPosition === "left" && "flex-row-reverse"
                )}
              >
                {label}
              </label>
            )}
            {description && (
              <div
                className={cn(
                  "flex items-center gap-2 mb-1 text-sm text-red-500 font-normal",
                  labelPosition === "left" && "flex-row-reverse"
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
                  "flex items-center gap-2 mb-1 text-sm font-normal",
                  labelPosition === "left" && "flex-row-reverse"
                )}
              >
                {label}
              </label>
            )}
            {description && (
              <div
                className={cn(
                  "flex items-center gap-2 mb-1 text-sm text-gray-400  font-normal",
                  labelPosition === "left" && "flex-row-reverse"
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
              inputVariants({ variant, error, size, radius, className })
            )}
            style={{
              paddingLeft: `${paddingLeft}px`,
              paddingRight: `${paddingRight}px`,
            }}
          />
          {rightSection && (
            <div
              className="absolute right-0 inset-y-0 flex items-center justify-center"
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

Input.displayName = "Input";

export { Input };
