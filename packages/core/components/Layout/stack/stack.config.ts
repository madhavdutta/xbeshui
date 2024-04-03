import { cva } from "class-variance-authority";
import { stackVariantType } from "./stackType";
const stackConfig: stackVariantType = {
  variants: {
    justify: {
      default: "justify-start",
      flexStart: "justify-start",
      center: "justify-center",
      spaceBetween: "justify-between",
      flexEnd: "justify-end",
      spaceAround: "justify-around",
    },
    align: {
      default: "items-start",
      itemStart: "items-start",
      center: "items-center",
      itemEnd: "items-end",
      stretch: "items-stretch",
    },
    gap: {
      default: "gap-0",
      xxs: "gap-2",
      xs: "gap-8",
      sm: "gap-12",
      md: "gap-16",
      lg: "gap-20",
      xl: "gap-24",
      xxl: "gap-28",
    },
  },
  defaultVariants: {
    justify: "flexStart",
    align: "itemStart",
    gap: "default",
  },
};
export const stackVariant = cva("flex flex-col w-full", stackConfig);
