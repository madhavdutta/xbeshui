import * as React from "react";

// Utility to concatenate class names
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../../utils";

const inputVariants = cva(
  "w-full h-9 rounded-md border border-input bg-transparent text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
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


export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,    VariantProps<typeof inputVariants>  {
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  leftSectionWidth?: number;
  rightSectionWidth?: number;
  className?: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  labelPosition?: "default" | "left" | "right";
  variant?: "default" | "filled" | "unstyled";
  radius?: "default" | "xs" | "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  error?: boolean;
}

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
      radius,
      disabled,
      variant,
      error,
      ...props
    },
    ref
  ) => {
    const paddingLeft = leftSection ? leftSectionWidth + 12 : 12;
    const paddingRight = rightSection ? rightSectionWidth + 12 : 12;

    return (
      <div className="flex flex-col w-full">
        {label && <label  className={cn(
            "flex items-center gap-2 mb-1 text-sm font-normal",
            labelPosition === "left" && "flex-row-reverse"
          )}>{label}</label>}
        {description && (
          <div className="mb-1 text-xs text-gray-400 font-normal">{description}</div>
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
            className={cn(
              inputVariants({ error, variant, disabled, radius, className })
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
