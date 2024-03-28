import { VariantProps } from "class-variance-authority";
import { simpleGridVariant } from "./simpleGrid.config";

export interface simpleGridVariantType {
  variants: {
    cols: {
      default: number;
      1: number;
      2: number;
      3: number;
      4: number;
      5: number;
      6: number;
      7: number;
      8: number;
      9: number;
      10: number;
      11: number;
      12: number;
    };
    verticalSpacing: {
      default: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    spacing: {
      default: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl:string;
    };
  };
  defaultVariants: {
    cols: keyof simpleGridVariantType["variants"]["cols"];
    verticalSpacing: keyof simpleGridVariantType["variants"]["verticalSpacing"];
    spacing: keyof simpleGridVariantType["variants"]["spacing"];
  };
}

export interface SimpleGridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof simpleGridVariant> {
  children?: React.ReactNode;
  className?: string;
  cols: keyof simpleGridVariantType["variants"]["cols"];
  verticalSpacing: keyof simpleGridVariantType["variants"]["verticalSpacing"];
  spacing: keyof simpleGridVariantType["variants"]["spacing"];
}
