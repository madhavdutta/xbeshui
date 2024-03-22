import React, { forwardRef } from "react";
import {  type VariantProps } from "class-variance-authority";
import { cn } from "../../../../utils";
import { ButtonVariant } from "../../../types/variantType";
import { ButtonSize } from "./button.d";
import { buttonVariants } from "./button.config";




export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  variant?: keyof ButtonVariant | null;
  size?: keyof ButtonSize | null;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, leftSection, radius, rightSection, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, radius }), className)}
        ref={ref}
        {...props}
      >
        {leftSection && <span className="mr-2">{leftSection}</span>}
        {children}
        {rightSection && <span className="ml-2">{rightSection}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };