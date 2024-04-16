

export interface GroupVariantType {
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
      center: string;
    };
    gap: {
      default: string;
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    wrap: {
      default: string;
      wrap: string;
      nowrap: string;
    };
    grow: {
      default: string;
      true: string;
      flase: string;
    };
  };
  defaultVariants: {
    justify: keyof GroupVariantType["variants"]["justify"];
    align: keyof GroupVariantType["variants"]["align"];
    gap: keyof GroupVariantType["variants"]["gap"];
    wrap: keyof GroupVariantType["variants"]["wrap"];
  };
}


