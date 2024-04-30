export interface ContainerVariantType {
  variants: {
    p: {
      default: string;
      none: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    justify: {
      default: string;
      start: string;
      center: string;
      spaceBetween: string;
      end: string;
      spaceAround: string;
    };
    items: {
      default: string;
      start: string;
      center: string;
      baseline: string;
      end: string;
      stretch: string;
    };
    size: {
      base: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      full:string;
    };
  };

  defaultVariants: {
    justify?: keyof ContainerVariantType["variants"]["justify"];
    size?: keyof ContainerVariantType["variants"]["size"];
    p?: keyof ContainerVariantType["variants"]["p"];
    items?: keyof ContainerVariantType["variants"]["items"]; // Use 'items' instead of 'itemsJustify'
    withBorder?: boolean;
  };
}
