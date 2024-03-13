import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils";
import { Button } from "..";

const tableVariants = cva("table-auto", {
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

export interface TableProps
  extends React.HTMLAttributes<HTMLTableElement>,
    VariantProps<typeof tableVariants> {
  data: any[];
  children?: React.ReactNode;
  size?: "default" | "fixed";
  footer?: React.ReactNode;
  borderCollapse?: "default" | "collapse" | "separate";
  itemsPerPage?: number;
  withPagination?: boolean;
}

const XbTable = React.forwardRef<HTMLTableElement, TableProps>(
  (
    {
      className,
      size,
      data,
      itemsPerPage,
      withPagination,
      footer,
      borderCollapse,
      ...props
    },
    ref
  ) => {
    const columns =
      data.length > 0
        ? Object.keys(data[0]).map((key) => ({ key, title: key }))
        : [];
    const [currentPage, setCurrentPage] = React.useState(1);
    const startIndex = (currentPage - 1) * (itemsPerPage ?? 10);
    const endIndex = Math.min(startIndex + (itemsPerPage ?? 10), data.length);
    const currentData = data.slice(startIndex, endIndex);

    const totalPages = Math.ceil(data.length / (itemsPerPage ?? 10));

    const changePage = (page: number) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      }
    };

    return (
      <div className="relative w-full overflow-auto border border-zinc-300 rounded-lg p-8">
        <table
          ref={ref}
          className={cn(
            tableVariants({
              size,
              borderCollapse,
              className, 
            },),
          'w-full')}
          {...props}
        >
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.key}>{column.title}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((column) => (
                  <TableCell key={column.key} className="py-4">
                    {row[column.key] ? row[column.key] : "-"}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
          {footer && <TableFooter>{footer}</TableFooter>}
        </table>
        {withPagination && (
          <div className="flex justify-end items-center mt-6 space-x-6">
            <Button
              variant={"secondary"}
              size={"default"}
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span className="mx-2 text-sm">{`Page ${currentPage} of ${totalPages}`}</span>
            <Button
              variant={"default"}
              size={"default"}
              onClick={() => changePage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    );
  }
);

XbTable.displayName = "XbTable";

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
))
Table.displayName = "Table"



const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    )}
    {...props}
  />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";


const Tablecomp = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
))


export {
  XbTable,
  Table,
  Tablecomp,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
