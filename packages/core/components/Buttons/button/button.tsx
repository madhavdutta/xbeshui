import { forwardRef } from "react";
import { cn } from "../../../../utils";
import { buttonVariants, type ButtonProps } from "./button.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";
import { IconLoader2 } from "@tabler/icons-react";
import type { ButtonVariantType,  ButtonSizeType,  ButtonRadiusType} from "./buttonType";


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
      loading,
      disabled,
      ...props
    },
    ref
  ) => {
    useXbeshProviderCheck();

    return (
      <button
        className={cn(buttonVariants({ variant, size, radius }), className)}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        { loading ? <IconLoader2 size={20} stroke={1.5} className={`animate-spin ${leftSection ? "mr-2" : ""}`} /> : leftSection && <span className="mr-2">{leftSection}</span>}
        {(loading && leftSection) ? children : null}
        {(!loading && children) || ""}
        {rightSection && <span className="ml-2">{rightSection}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants, type ButtonVariantType, type ButtonSizeType, type ButtonRadiusType};