import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils";

const textareaVariants = cva(
  "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      labelPosition: {
        default: "",
        right: "",
        left: "",
      },

      variant: {
        default: "none",
        filled: "bg-gray-200",
        unstyled: "border-0 shadow-none",
      },

      radius: {
        default: "rounded-none",
        xs: "rounded-xs",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
      // size: {
      //   default: "",
      //   xs: "shadow-xs",
      //   sm: "shadow-sm",
      //   md: "shadow-md",
      //   lg: "shadow-lg",
      //   xl: "shadow-xl",
      // },
      disabled: {
        default: "",
        true: "border",
        false: "",
      },
      error: {
        default: "",
        true: "border-red-500 text-red-500",
      },
    },
    defaultVariants: {
      labelPosition: "default",
      radius: "default",
      // size: "default",
      disabled: "default",
      variant: "default",
    },
  }
);

export interface textareaProps
  extends React.HTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  label?: React.ReactNode;
  description?: string;
  labelPosition?: "default" | "left" | "right";
  variant?: "default" | "filled" | "unstyled";
  radius?: "default" | "xs" | "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  error?: boolean;
}

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
      error,
      ...props
    },
    ref
  ) => {
    return (
      <div className="grid w-full gap-1.5">
        <label
          className={cn(
            "flex items-center gap-2",
            labelPosition === "left" && "flex-row-reverse"
          )}
        >
          {label}
        </label>
        <textarea
          className={cn(
            textareaVariants({ error, variant, disabled, radius, className })
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
