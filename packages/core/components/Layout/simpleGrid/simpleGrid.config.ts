import { cva } from "class-variance-authority";
import { simpleGridVariantType } from "./simpleGrid.d";

const simpleGridConfig: simpleGridVariantType = {
  variants: {
    cols: {
      default: 1,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
      11: 11,
      12: 12,
    },
    verticalSpacing: {
      default: "gap-y-6",
      xs: "gap-y-2",
      sm: "gap-y-4",
      md: "gap-y-6",
      lg: "gap-y-8",
      xl: "gap-y-10",
    },
    spacing: {
      default: "gap-x-6",
      xs: "gap-x-2",
      sm: "gap-x-4",
      md: "gap-x-6",
      lg: "gap-x-8",
      xl: "gap-x-10",
    },
  },
  defaultVariants: {
    cols: "default",
    verticalSpacing: "default",
    spacing: "default",
  },
};
export const simpleGridVariant = cva("grid", simpleGridConfig);
