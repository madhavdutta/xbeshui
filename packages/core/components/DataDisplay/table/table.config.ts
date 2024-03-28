import { cva } from "class-variance-authority";
import { TableVariantsConfig } from "./tableType";

const tableConfig: TableVariantsConfig = {
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
};

export const tableVariants = cva("table-auto", tableConfig);
