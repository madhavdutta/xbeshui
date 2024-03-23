import { VariantProps } from "class-variance-authority";
import { flexBoxVariants } from "./flexBox.config";

export interface flexBoxVariantTYpe {
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
    direction: keyof flexBoxVariantTYpe["variants"]["direction"];
    justify: keyof flexBoxVariantTYpe["variants"]["justify"];
    align: keyof flexBoxVariantTYpe["variants"]["align"];
    wrap: keyof flexBoxVariantTYpe["variants"]["wrap"];
  };
}

export interface FlexBoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexBoxVariants> {
  children: React.ReactNode;
  direction?: keyof flexBoxVariantTYpe["variants"]["direction"];
  justify?: keyof flexBoxVariantTYpe["variants"]["justify"];
  align?: keyof flexBoxVariantTYpe["variants"]["align"];
  wrap?: keyof flexBoxVariantTYpe["variants"]["wrap"];
}
