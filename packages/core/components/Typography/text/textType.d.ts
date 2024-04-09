import { VariantProps } from "class-variance-authority";
import { textVariants } from "./text.config";

export interface TextVariantsType {
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
    textTransform: {
      default: string;
      uppercase: string;
      lowercase: string;
      capitalize: string;
    };
    textOverflow: {
      default: string;
      truncate: string;
      ellipsis: string;
      clip: string;
    };
    lineClamp: {
      default: string;
      overflow: string;
      clamp2: string;
      clamp3: string;
      clamp4: string;
      clamp5: string;
      clamp6: string;
      clamp7: string;
      clamp8: string;
      clamp9: string;
      clamp10: string;
      clamp11: string;
      clamp12: string;
      clamp13: string;
      clamp14: string;
      clamp15: string;
      clamp16: string;
      clamp17: string;
      clamp18: string;
      clamp19: string;
      clamp20: string;
    };

    fontWeight: {
      default: string;
      thin: string;
      extralight: string;
      light: string;
      normal: string;
      medium: string;
      semibold: string;
      bold: string;
      extrabold: string;
      black: string;
    };
  };
  defaultVariants: {
    size: keyof TextVariantsType["variants"]["size"];
    textWrap: keyof TextVariantsType["variants"]["textWrap"];
    line: keyof TextVariantsType["variants"]["line"];
    align: keyof TextVariantsType["variants"]["align"];
    fontFamily: keyof TextVariantsType["variants"]["fontFamily"];
    textTransform: keyof TextVariantsType["variants"]["textTransform"];
    textOverflow: keyof TextVariantsType["variants"]["textOverflow"];
    lineClamp: keyof TextVariantsType["variants"]["lineClamp"];
    fontWeight: keyof TextVariantsType["variants"]["fontWeight"];
  };
}

