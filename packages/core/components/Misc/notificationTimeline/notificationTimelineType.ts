export interface notificationTimelineVariantConfigType {
  variants: {
    variant: {
      default: string;
    };
    bullet: {
      default: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    lineWidth: {
      default: string;
      xs: string;
      md: string;
      lg: string;
      xl: string;
    };
  };
  defaultVariants: {
    variant: keyof notificationTimelineVariantConfigType["variants"]["variant"];
    bullet: keyof notificationTimelineVariantConfigType["variants"]["bullet"];
    lineWidth: keyof notificationTimelineVariantConfigType["variants"]["lineWidth"];
  };
}


