import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
} from "@tabler/icons-react";

import { Button } from "../../Buttons/button/button";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../index";
import { DataTablePaginationProps } from "./dataTableType";
import { SelectMain } from "../../Inputs/select/select";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

export function DataTablePagination<TData>({
  table,
  pageSizeOptions = [10, 20, 30, 40, 50],
}: DataTablePaginationProps<TData>) {
  useXbeshProviderCheck();
  return (
    <div className="flex w-full  text-secondary-foreground  flex-col items-center justify-between gap-4 overflow-auto px-2 py-1 sm:flex-row sm:gap-8">
      <div className="flex-1 whitespace-nowrap text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6 lg:gap-8">
        <div className="flex items-center space-x-2">
          <p className="whitespace-nowrap text-sm font-medium">Rows per page</p>
          <SelectMain
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {pageSizeOptions.map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectMain>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            aria-label="Go to first page"
            variant="outline"
            className="hidden size-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <IconChevronsLeft
              className="size-4 text-secondary-foreground "
              aria-hidden="true"
            />
          </Button>
          <Button
            aria-label="Go to previous page"
            variant="outline"
            className="size-8 p-0"
            onClick={() => console.log(table.previousPage())}
            disabled={!table.getCanPreviousPage()}
          >
            <IconChevronLeft
              className="size-4 text-secondary-foreground "
              aria-hidden="true"
            />
          </Button>
          <Button
            aria-label="Go to next page"
            variant="outline"
            className="size-8 p-0"
            onClick={() => console.log(table.nextPage())} // getting undefined in the cons
            disabled={!table.getCanNextPage()}
          >
            <IconChevronRight
              className="size-4 text-secondary-foreground "
              aria-hidden="true"
            />
          </Button>
          <Button
            aria-label="Go to last page"
            variant="outline"
            className="hidden size-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <IconChevronsRight
              className="size-4 text-secondary-foreground "
              aria-hidden="true"
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
