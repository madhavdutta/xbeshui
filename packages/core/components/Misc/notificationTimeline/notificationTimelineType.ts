export interface notificationTimelineVariantConfigType {
  variants: {
    variant: {
      default: string;
    };

    lineWidth: {
      default: string;
      none: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
  };
  defaultVariants: {
    variant: keyof notificationTimelineVariantConfigType["variants"]["variant"];
    lineWidth: keyof notificationTimelineVariantConfigType["variants"]["lineWidth"];
  };
}
