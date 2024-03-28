interface InputOTPGroupProps extends React.ComponentPropsWithoutRef<"div"> {}

interface InputOTPSlotProps extends React.ComponentPropsWithoutRef<"div"> {
  index: number;
}

interface InputOTPSeparatorProps
  extends React.ComponentPropsWithoutRef<"div"> {}

interface OTPInputProps {
  className?: string;
  containerClassName?: string;
  maxLength?: number;
  children?: React.ReactNode;
  value?: string;
  onChange?: (newValue: string) => unknown;
}

interface InputOTPProps extends OTPInputProps {}

export {
  InputOTPGroupProps,
  InputOTPSlotProps,
  InputOTPSeparatorProps,
  InputOTPProps,
};
