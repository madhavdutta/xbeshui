import React, { forwardRef } from "react";
import { cn } from "../../../../utils";

import { ButtonProps } from "./button.d";
import { buttonVariants } from "./button.config";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      leftSection,
      radius,
      rightSection,
      children,
      ...props
    },
    ref
  ) => {
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
