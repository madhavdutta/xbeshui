export type CardRadiusType = {
  default: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export type CardShadowType = {
  default: string;
  none: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export type CardPaddingType = {
  default: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export interface CardVariantsConfigType {
  variants: {
    radius: CardRadiusType;
    shadow: CardShadowType;
    withBorder: {
      default: string;
      true: string;
      false: string;
    };
    padding: CardPaddingType;
  };
  defaultVariants: {
    padding: keyof CardPaddingType;
    withBorder: boolean;
    shadow: keyof CardShadowType;
    radius: keyof CardRadiusType;
  };
}
