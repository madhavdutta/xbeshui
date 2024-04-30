export interface StackVariantType {
  variants: {
    justify: {
      default: string;
      top: string;
      center: string;
      spaceBetween: string;
      bottom: string;
      spaceAround: string;
    };
    align: {
      default: string;
      left: string;
      center: string;
      right: string;
      stretch: string;
    };
    gap: {
      default: string;
      none: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  };
  defaultVariants: {
    justify: keyof StackVariantType["variants"]["justify"];
    align: keyof StackVariantType["variants"]["align"];
    gap: keyof StackVariantType["variants"]["gap"];
  };
}
