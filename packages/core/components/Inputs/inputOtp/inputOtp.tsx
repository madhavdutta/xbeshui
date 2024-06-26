import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { IconPointFilled } from "@tabler/icons-react";
import { cn } from "../../../../utils";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

interface InputOTPComponent<T extends React.ElementType = typeof OTPInput>
  extends React.ForwardRefExoticComponent<
    Omit<React.ComponentPropsWithoutRef<T>, "ref"> &
      React.RefAttributes<React.ElementRef<T>>
  > {
  Group: typeof InputOTPGroup;
  Slot: typeof InputOTPSlot;
  Separator: typeof InputOTPSeparator;
}

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => {
  useXbeshProviderCheck();
  return (
    <OTPInput
      ref={ref}
      containerClassName={cn(
        "flex items-center gap-2 has-[:disabled]:opacity-50",
        containerClassName
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  );
}) as InputOTPComponent;

InputOTP.displayName = "InputOTP";

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
));

InputOTPGroup.displayName = "InputOTPGroup";

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 items-center text-secondary-foreground justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
});

InputOTPSlot.displayName = "InputOTPSlot";

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" aria-valuemin={0} aria-valuemax={100} aria-valuenow={0} {...props}>
    <IconPointFilled stroke={1.5} />
  </div>
));

InputOTPSeparator.displayName = "InputOTPSeparator";

(InputOTP as InputOTPComponent).Group = InputOTPGroup;
(InputOTP as InputOTPComponent).Slot = InputOTPSlot;
(InputOTP as InputOTPComponent).Separator = InputOTPSeparator;

export { InputOTP };