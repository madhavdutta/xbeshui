import * as React from "react";

import { cn } from "../../../../utils";
import { textareaProps } from "./textarea.d";
import { textareaVariants } from "./textarea.config";

const Textarea = React.forwardRef<HTMLTextAreaElement, textareaProps>(
  (
    {
      className,
      label,
      description,
      labelPosition,
      radius,
      disabled,
      variant,
      ...props
    },
    ref
  ) => {
    return (
      <div className="grid w-full gap-1.5">
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
          <div className="mb-1 text-xs text-gray-400 font-normal">
            {description}
          </div>
        )}
        <textarea
          className={cn(textareaVariants({ variant, radius, className }))}
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
