import { cva } from "class-variance-authority";
import type { SimpleGridVariantType } from "./simpleGridType";

const simpleGridConfig: SimpleGridVariantType = {
  variants: {
    cols: {
      base: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 5,
    },
    verticalSpacing: {
      base: "gap-y-4",
      sm: "gap-y-6",
      md: "gap-y-8",
      lg: "gap-y-10",
      xl: "gap-y-12",
    },
    spacing: {
      base: "gap-x-4",
      sm: "gap-x-6",
      md: "gap-x-8",
      lg: "gap-x-10",
      xl: "gap-x-12",
    },
  },
  defaultVariants: {
    cols: "base",
    verticalSpacing: "base",
    spacing: "base",
  },
};

export const simpleGridVariant = cva("grid font-default", simpleGridConfig);

interface BreakpointCols {
  cols?: Partial<Record<keyof typeof simpleGridConfig.variants.cols, number>>;
}

export interface SimpleGridProps
  extends React.HTMLAttributes<HTMLDivElement>,
  Omit<BreakpointCols, "cols"> {
  children?: React.ReactNode;
  className?: string;
  cols?: Partial<Record<keyof typeof simpleGridConfig.variants.cols, number>>;
  verticalSpacing?: keyof SimpleGridVariantType["variants"]["verticalSpacing"];
  spacing?: keyof SimpleGridVariantType["variants"]["spacing"];
}