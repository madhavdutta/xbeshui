import * as React from "react";

import { cn } from "../../../../utils";

import { textareaVariants, TextareaProps } from "./textarea.config";

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps >(
  (
    {
      className,
      label,
      description,
      labelPosition,
      placeholder,
      radius,
      size,
      error,
      disabled,
      variant,
      ...props
    },
    ref
  ) => {
    return (
      <div className='grid w-full'>
        {error ? (
          <>
            {" "}
            {label && (
              <label
                className={cn(
                  "flex items-center gap-2 text-sm font-normal text-red-500",
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
                  "flex items-center gap-2 text-secondary-foreground mb-1 text-sm font-normal",
                  labelPosition === "left" && "flex-row-reverse"
                )}
              >
                {label}
              </label>
            )}
            {description && (
              <div
                className={cn(
                  "flex items-center gap-2 mb-1  text-sm text-muted-foreground font-normal",
                  labelPosition === "left" && "flex-row-reverse"
                )}
              >
                {description}
              </div>
            )}
          </>
        )}
        <textarea
          className={cn(textareaVariants({ variant,error, size, radius, className }),'bg-background text-secondary-forground')}
          placeholder={placeholder}
          ref={ref}
          disabled={disabled}
          {...props}
        />
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
