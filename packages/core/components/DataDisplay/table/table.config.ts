/* eslint-disable @typescript-eslint/no-explicit-any */
import { cva, type VariantProps } from "class-variance-authority";
import type { TableVariantsConfigType } from "./tableType";

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

export const tableVariants = cva("bg-background font-default border-input text-secondary-foreground table-auto", tableConfig);

export interface TableProps extends React.HTMLAttributes<HTMLTableElement>, VariantProps<typeof tableVariants> {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  data: any[];
  children?: React.ReactNode;
  size?: keyof TableVariantsConfigType["variants"]["size"];
  footer?: React.ReactNode;
  borderCollapse?: keyof TableVariantsConfigType["variants"]["borderCollapse"];
  itemsPerPage?: number;
  withPagination?: boolean;
}
