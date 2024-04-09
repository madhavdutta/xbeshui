import { VariantProps, cva } from "class-variance-authority";
import { flexBoxVariantType } from "./flexBoxType";
const flexBoxConfig: flexBoxVariantType = {
  variants: {
    direction: {
      default: "flex-row",
      row: "flex-row",
      rowReverse: "flex-row-reverse",
      column: "flex-col",
      columnReverse: "flex-col-reverse",
    },
    justify: {
      default: "justify-start",
      flexStart: "justify-start",
      flexEnd: "justify-end",
      center: "justify-center",
      spaceBetween: "justify-between",
      spaceAround: "justify-around",
    },
    align: {
      default: "items-stretch",
      flexStart: "items-start",
      flexEnd: "items-end",
      center: "items-center",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    wrap: {
      default: "flex-nowrap",
      nowrap: "flex-nowrap",
      wrap: "flex-wrap",
      wrapReverse: "flex-wrap-reverse",
    },
  },
  defaultVariants: {
    direction: "default",
    justify: "default",
    align: "default",
    wrap: "default",
  },
};
export const flexBoxVariants = cva("flex", flexBoxConfig);

export interface FlexBoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexBoxVariants> {
  children?: React.ReactNode;
  direction?: keyof flexBoxVariantType["variants"]["direction"];
  justify?: keyof flexBoxVariantType["variants"]["justify"];
  align?: keyof flexBoxVariantType["variants"]["align"];
  wrap?: keyof flexBoxVariantType["variants"]["wrap"];
}