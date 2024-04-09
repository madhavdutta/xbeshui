import { VariantProps } from "class-variance-authority";
import { flexBoxVariants } from "./flexBox.config";

export interface flexBoxVariantType {
  variants: {
    direction: {
      default: string;
      row: string;
      rowReverse: string;
      column: string;
      columnReverse: string;
    };
    justify: {
      default: string;
      flexStart: string;
      flexEnd: string;
      center: string;
      spaceBetween: string;
      spaceAround: string;
    };
    align: {
      default: string;
      flexStart: string;
      flexEnd: string;
      center: string;
      stretch: string;
      baseline: string;
    };
    wrap: {
      default: string;
      nowrap: string;
      wrap: string;
      wrapReverse: string;
    };
  };
  defaultVariants: {
    direction: keyof flexBoxVariantType["variants"]["direction"];
    justify: keyof flexBoxVariantType["variants"]["justify"];
    align: keyof flexBoxVariantType["variants"]["align"];
    wrap: keyof flexBoxVariantType["variants"]["wrap"];
  };
}


