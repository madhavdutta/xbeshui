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

import { IconChevronDown } from "@tabler/icons-react";
import { Text, Button, TextInput, DropdownMenu } from "../..";
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

export const DataTable = <T,>({
	data,
	filters,
	columns,
	searchable,
}: DataTableProps<T>) => {
	useXbeshProviderCheck();
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[],
	);
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState({});

	const table = useReactTable({
		data,
		columns,
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
	});

	return (
		<div className="w-full">
			<div className="flex items-center gap-3 py-4">
				<TextInput
					placeholder={`Filter ${searchable}...`}
					radius="md"
					value={
						(table.getColumn(searchable)?.getFilterValue() as string) ?? ""
					}
					onChange={(event: { target: { value: unknown } }) =>
						table.getColumn(searchable)?.setFilterValue(event.target.value)
					}
					className="max-w-sm"
				/>
				{filters?.map((filter) => (
					<DropdownMenu key={filter.name}>
						<DropdownMenu.Trigger asChild>
							<Button
								variant="outline"
								size="sm"
								className="border-dashed border-2 border-muted px-3"
							>
								<IconCirclePlus className="mr-2 h-4 w-4" />
								<Text size="sm" className="capitalize">
									{filter.name}
								</Text>
							</Button>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content align="end">
							<DropdownMenu.Item
								onClick={() =>
									table.getColumn(filter.name)?.setFilterValue(null)
								}
							>
								All
							</DropdownMenu.Item>
							{filter.options.map((option) => (
								<DropdownMenu.Item
									key={option}
									onClick={() =>
										table.getColumn(filter.name)?.setFilterValue(option)
									}
								>
									{option}
								</DropdownMenu.Item>
							))}
						</DropdownMenu.Content>
					</DropdownMenu>
				))}

				<DropdownMenu>
					<DropdownMenu.Trigger asChild>
						<Button variant="outline" className="ml-auto">
							<Text size="xs">View</Text>{" "}
							<IconChevronDown stroke={1.5} className="ml-2 h-4 w-4" />
						</Button>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content align="end">
						{table
							.getAllColumns()
							.filter((column) => column.getCanHide())
							.map((column) => {
								return (
									<DropdownMenu.CheckboxItem
										key={column.id}
										className="capitalize"
										checked={column.getIsVisible()}
										onCheckedChange={(value) =>
											column.toggleVisibility(!!value)
										}
									>
										{column.id}
									</DropdownMenu.CheckboxItem>
								);
							})}
					</DropdownMenu.Content>
				</DropdownMenu>
			</div>
			<div className="rounded-sm border border-input text-secondary-foreground">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext(),
													)}
										</TableHead>
									);
								})}
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
												cell.getContext(),
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
