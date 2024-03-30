import { cva } from "class-variance-authority";
import { groupVariantType } from "./group.d";
const groupConfig:groupVariantType= {
  variants: {
    justify: {
      default: "",
      flexStart: "justify-start",
      center: "justify-center",
      spaceBetween: "justify-between",
      flexEnd: "justify-end",
      spaceAround: "justify-around",
    },
    align: {
      center: "items-center",
    },
    gap: {
      default: "gap-16",
      xxs: "gap-2",
      xs: "gap-4",
      sm: "gap-12",
      md: "gap-16",
      lg: "gap-20",
      xl: "gap-24",
      xxl: "gap-28",
    },
  },
  defaultVariants: {
    justify: "default",
    align: "center",
    gap: "default",
  },
}
export const groupVariant = cva("w-full flex flex-row",groupConfig);


