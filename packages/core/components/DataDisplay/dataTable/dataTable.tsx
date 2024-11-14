import * as React from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import type {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table";

import { IconAdjustmentsHorizontal, IconChevronDown, IconChevronUp, IconDots, IconFilter, IconSearch, IconSelector } from "@tabler/icons-react";
import { Text, Button, TextInput, DropdownMenu, Group, ActionIcon } from "../..";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../table/table";
import { DataTablePagination } from "./dataTablePagination";
import { IconCirclePlus } from "@tabler/icons-react";
import type { DataTableProps } from "./dataTableType";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";
interface SelectedFilters {
	[key: string]: string | null;
  }

  // Define the interface for action options
interface ActionOption {
	option: string | React.ReactNode;
	handleClick: (row: any) => void;
  }
export const DataTable = <T,>({
  data,
  filters,
  columns,
  searchable,
  actionOptions,
}: DataTableProps<T>  & { actionOptions?: ActionOption[] }) => {
  useXbeshProviderCheck();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [selectedFilters, setSelectedFilters] = React.useState<SelectedFilters>(
    {}
  );

  // Add a column for checkboxes
  const columnsWithCheckbox = React.useMemo(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <input
            style={{ borderRadius: "5px" }}
            type="checkbox"
            checked={table.getIsAllPageRowsSelected()}
            onChange={table.getToggleAllPageRowsSelectedHandler()}
          />
        ),
        cell: ({ row }) => (
          <input
            style={{ borderRadius: "5px" }}
            type="checkbox"
            checked={row.getIsSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
        ),
      },
      ...columns,
      {
        id: "action",
        header: "",
        cell: ({ row }) => (
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <ActionIcon variant="ghost" size="sm">
                <IconDots size={15} />
              </ActionIcon>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content align="end">
              {/* Render dynamic action options */}
              {actionOptions?.map((option) => (
                <DropdownMenu.Item
                  key={option.option}
                  onClick={() => option.handleClick(row)}
                >
                  {option.option}
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu>
        ),
      },
    ],
    [columns]
  );
  const table = useReactTable({
    data,
    columns: columnsWithCheckbox,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    globalFilterFn: "includesString",
  });


  const handleFilterChange = (filterName: string, option: string | null) => {
    table.getColumn(filterName)?.setFilterValue(option);
    setSelectedFilters({
      ...selectedFilters,
      [filterName]: option,
    });
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-3 py-4">
        {/* <TextInput
					placeholder={`Filter ${searchable}...`}
					radius="sm"
					value={
						(table.getColumn(searchable)?.getFilterValue() as string) ?? ""
					}
					onChange={(event: { target: { value: unknown } }) =>
						table.getColumn(searchable)?.setFilterValue(event.target.value)
					}
					className="max-w-sm"
				/> */}
        <Group className="sm:w-96 w-full">
          <TextInput
            placeholder={`Search across all columns...`}
            radius="sm"
            leftSection={<IconSearch size="14" />}
            value={table.getState().globalFilter ?? ""}
            onChange={(event: { target: { value: string } }) =>
              table.setGlobalFilter(event.target.value)
            }
            className="max-w-sm"
          />
        </Group>
        <div className="flex items-center justify-end gap-2">
          {filters?.map((filter) => (
            <DropdownMenu key={filter.name}>
              <DropdownMenu.Trigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-dashed border-2 border px-3"
                >
                  <IconFilter className="mr-2 h-4 w-4" />
                  <Text size="sm" className="capitalize">
                    {selectedFilters[filter.name] || filter.name}
                  </Text>
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content align="end">
                <DropdownMenu.Item
                  onClick={() => handleFilterChange(filter.name, null)}
                >
                  All
                </DropdownMenu.Item>
                {filter.options.map((option) => (
                  <DropdownMenu.Item
                    key={option}
                    onClick={() => handleFilterChange(filter.name, option)}
                  >
                    {option}
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu>
          ))}

          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <Button variant="outline" size={"sm"} className="ml-auto ">
              <Text size="sm" className="capitalize">View</Text>{" "}
                <IconAdjustmentsHorizontal stroke={1.5} className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content align="end">
              {table
                .getAllColumns()
                .filter(
                  (column, index) =>
                    column.getCanHide() &&
                    column.id !== "select" &&
                    column.id !== "action" &&
                    index !== 1
                )
                .map((column) => {
                  return (
                    <DropdownMenu.CheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) => column.toggleVisibility(!!value)}
                    >
                      <Text size="xs" className="pl-5">
                        {column.id}
                      </Text>
                    </DropdownMenu.CheckboxItem>
                  );
                })}
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>

      </div>
      <div className="rounded-sm border border-input text-secondary-foreground">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="relative">
                    {header.isPlaceholder ? null : (
                      <Group
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer select-none"
                            : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: <IconChevronUp size={14} />,
                          desc: <IconChevronDown size={14} />,
                        }[header.column.getIsSorted() as string] ?? (header.column.getCanSort() ? <IconSelector size={14} /> : "")}
                      </Group>
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <DataTablePagination
          table={table}
          pageSizeOptions={[10, 20, 30, 40, 50]}
        />
      </div>
    </div>
  );
};
