export interface StackVariantType {
  variants: {
    justify: {
      default: string;
      flexStart: string;
      center: string;
      spaceBetween: string;
      flexEnd: string;
      spaceAround: string;
    };
    align: {
      default: string;
      itemStart: string;
      center: string;
      itemEnd: string;
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
