export type AccordionVariantType = {
  default: string;
  filled: string;
  contained: string;
  separated: string;
};

export type AccordionRadiusType = {
  default: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export type ChevronPositionType = {
  default: string;
  left: string;
  right: string;
};

export type ChevronSizeType = {
  default: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

export type AccordionVariantsType = {
  variants: {
    variant: AccordionVariantType;
    radius: AccordionRadiusType;
    chevronPosition: ChevronPositionType;
    chevronsize: ChevronSizeType;
  };
  defaultVariants: {
    variant: keyof AccordionVariantType;
    radius: keyof AccordionRadiusType;
    chevronPosition: keyof ChevronPositionType;
    chevronsize: keyof ChevronSizeType;
  };
};
