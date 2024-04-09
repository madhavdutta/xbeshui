import { VariantProps } from "class-variance-authority";

export interface BlockQuoteVariantsType {
  variants: {
    size: {
      default: string;
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
      "4xl": string;
      "5xl": string;
      "6xl": string;
      "7xl": string;
      "8xl": string;
      "9xl": string;
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
      "3xl": string;
      "4xl": string;
      "5xl": string;
      "6xl": string;
      "7xl": string;
      "8xl": string;
      "9xl": string;
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


