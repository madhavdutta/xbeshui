export type AlertVariantType = {
  default: string;
  destructive: string;
  success: string;
  warning: string;
  notice: string;
  muted: string;
};

export interface AlertVariantsConfigType {
  variants: {
    variant: AlertVariantType;
  };
  defaultVariants: {
    variant: keyof AlertVariantType;
  };
}