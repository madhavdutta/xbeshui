import * as React from "react";
import { cn } from "../../../../utils";
import { InputProps, inputVariants } from "../textInput/textInput.config";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      leftSection,
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
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    const togglePasswordVisibility = () => {
      setPasswordVisible((prev) => !prev);
    };

    const inputType = passwordVisible ? "text" : "password";
    const eyeIcon = passwordVisible ? (
      <IconEyeOff color="gray" size={18} />
    ) : (
      <IconEye color="gray" size={18} />
    );

    const paddingLeft = leftSection ? leftSectionWidth + 12 : 12;
    const paddingRight = rightSectionWidth + 12;

    return (
      <div className="flex flex-col w-full">
        {error ? (
          <>
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
            type={inputType}
            className={cn(
              inputVariants({ variant, error, width, radius, className })
            )}
            style={{
              paddingLeft: `${paddingLeft}px`,
              paddingRight: `${paddingRight}px`,
            }}
          />

          <div
            className="absolute right-0 inset-y-0  flex items-center justify-center"
            style={{ width: rightSectionWidth, cursor: "pointer" }}
            onClick={togglePasswordVisibility}
          >
            {eyeIcon}
          </div>
        </div>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
