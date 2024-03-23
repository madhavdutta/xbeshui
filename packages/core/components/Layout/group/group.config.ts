import { cva } from "class-variance-authority";
export const groupVariant = cva("w-full flex flex-row", {
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
    grow: {
      true: "xbeshCustomGrow",
      false: "",
    },
  },
  defaultVariants: {
    justify: "default",
    align: "center",
    gap: "default",
    grow: false,
  },
});


