import { type Table, ColumnDef } from "@tanstack/react-table";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  pageSizeOptions?: number[];
}
type DataTableProps<T> = {
  data: T[];
  filters: { name: string; options: string[] }[];
  columns: ColumnDef<unknown>[];
  searchable: string;
};

export { DataTablePaginationProps, DataTableProps };
