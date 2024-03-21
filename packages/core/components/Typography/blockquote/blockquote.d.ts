

export interface BlockQuoteVariantsType {
  variants: {
    size: {
      default: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    textWrap: {
      default: string;
      wrap: string;
      nowrap: string;
      balance: string;
      pretty: string;
    };
    line: {
      default: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    fontFamily: {
      default: string;
      serif: string;
      mono: string;
      sans: string;
    };
    align: {
      default: string;
      center: string;
      right: string;
      justify: string;
    };
    defaultVariants: {
      size: keyof BlockQuoteVariantsType["variants"]["size"];
      textWrap: keyof BlockQuoteVariantsType["variants"]["textWrap"];
      line: keyof BlockQuoteVariantsType["variants"]["line"];
      fontFamily: keyof BlockQuoteVariantsType["variants"]["fontFamily"];
    };
  };
}



