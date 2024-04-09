import { VariantProps, cva } from "class-variance-authority";
import {   TableVariantsConfigType } from "./tableType";

const tableConfig: TableVariantsConfigType = {
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

export const tableVariants = cva("bg-background text-primary-foreground table-auto", tableConfig);

export interface TableProps extends React.HTMLAttributes<HTMLTableElement>, VariantProps<typeof tableVariants> {
  data: never[];
  children?: React.ReactNode;
  size?: keyof TableVariantsConfigType["variants"]["size"];
  footer?: React.ReactNode;
  borderCollapse?: keyof TableVariantsConfigType["variants"]["borderCollapse"];
  itemsPerPage?: number;
  withPagination?: boolean;
}
