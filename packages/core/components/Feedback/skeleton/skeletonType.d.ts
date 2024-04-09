export interface skeletonVariantsConfigType {
  variants: {
    radius: {
      default: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    animate: {
      default: string;
      pulse: string;
    };
  };
  defaultVariants: {
    radius: keyof skeletonVariantsConfigType["variants"]["radius"];
    animate: keyof skeletonVariantsConfigType["variants"]["animate"];
  };
}

