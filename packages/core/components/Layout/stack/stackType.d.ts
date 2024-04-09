import { VariantProps } from "class-variance-authority";
import { stackVariant } from "./stack.config";

export interface StackVariantType {
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
      default: string;
      itemStart: string;
      center: string;
      itemEnd: string;
      stretch: string;
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
  };
  defaultVariants: {
    justify: keyof StackVariantType["variants"]["justify"];
    align: keyof StackVariantType["variants"]["align"];
    gap: keyof StackVariantType["variants"]["gap"];
  };
}


