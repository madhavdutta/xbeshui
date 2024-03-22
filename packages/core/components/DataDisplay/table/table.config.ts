import { cva } from "class-variance-authority";

export const tableVariants = cva("table-auto", {
  variants: {
    size: {
      default: "table-auto",
      fixed: "table-fixed",
    },
    borderCollapse: {
      default: "border-collapse",
      collapse: "border-collapse",
      separate: "border-separate",
    },
  },
  defaultVariants: {
    size: "default",
    borderCollapse: "default",
  },
});
