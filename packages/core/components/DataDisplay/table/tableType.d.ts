import { VariantProps } from "class-variance-authority";

export interface TableVariantsConfig {
  variants: {
    size: {
      default: string;
      fixed: string;
    };
    borderCollapse: {
      default: string;
      collapse: string;
      separate: string;
    };
  };
  defaultVariants: {
    size: keyof TableVariantsConfig["variants"]["size"];
    borderCollapse: keyof TableVariantsConfig["variants"]["borderCollapse"];
  };
}

export interface TableProps extends React.HTMLAttributes<HTMLTableElement>, VariantProps<typeof tableVariants> {
  data: never[];
  children?: React.ReactNode;
  size?: keyof TableVariantsConfig["variants"]["size"];
  footer?: React.ReactNode;
  borderCollapse?: keyof TableVariantsConfig["variants"]["borderCollapse"];
  itemsPerPage?: number;
  withPagination?: boolean;
}
