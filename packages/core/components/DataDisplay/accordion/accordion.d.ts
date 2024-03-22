export type AccordionVariant = {
  default: string;
  filled: string;
  contained: string;
  separated: string;
};

export type AccordionRadius = {
  default: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export type chevronPosition = {
  default: string;
  left: string;
  right: string;
};

export type chevronSize = {
  default: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

export type AccordionVariants = {
  variants: {
    variant: AccordionVariant;
    radius: AccordionRadius;
    chevronPosition: chevronPosition;
    chevronsize: chevronSize;
  };
  defaultVariants: {
    variant: keyof AccordionVariant;
    radius: keyof AccordionRadius;
    chevronPosition: keyof chevronPosition;
    chevronsize: keyof chevronSize;
  };
};
