export interface notificationTimelineVariantConfigType {
  variants: {
    variant: {
      default: string;
    };
    // bulletSize: {
    //   default: string;
    //   xs: string;
    //   sm: string;
    //   md: string;
    //   lg: string;
    //   xl: string;
    // };
    lineWidth: {
      default: string;
      none:string;
      xs: string;
      sm:string;
      md: string;
      lg: string;

    };
  };
  defaultVariants: {
    variant: keyof notificationTimelineVariantConfigType["variants"]["variant"];
    // bulletSize: keyof notificationTimelineVariantConfigType["variants"]["bulletSize"];
    lineWidth: keyof notificationTimelineVariantConfigType["variants"]["lineWidth"];
  };
}
