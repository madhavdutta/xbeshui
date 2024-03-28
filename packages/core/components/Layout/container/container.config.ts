import { cva } from "class-variance-authority";
import { containerJustifyVariantType } from "./container.d";
const containerConfig:containerJustifyVariantType={
  variants: {
    p: {
      default: "p-8",
      none: "p-0",
      xs: "p-4",
      sm: "p-8",
      md: "p-12",
      lg: "p-16",
      xl: "p-20",
      xxl: "p-24",
    },
    justify: {
      default: "justify-start",
      flexStart: "justify-start",
      center: "justify-center",
      spaceBetween: "justify-between",
      flexEnd: "justify-end",
      spaceAround: "justify-around",
    },
    size: {
      default: "w-full",
      xs: "w-5/12",
      sm: "w-6/12",
      md: "w-7/12",
      lg: "w-8/12",
      xl: "w-9/12",
      xxl: "w-10/12",
    },
  },
  defaultVariants: {
    justify: "flexStart",
    size: "default",
    p: "default",
  },
}
export const containerVariant = cva("container mx-auto w-full p-8 max-w-none",containerConfig );
