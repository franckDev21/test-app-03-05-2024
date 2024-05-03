"use client"

import React from 'react'
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Bus from '@/models/bus'
import { FaBus } from "react-icons/fa"
import { FaArrowRightLong } from "react-icons/fa6";
import { data } from '@/lib/fakeData'

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<Bus>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className='w-6 h-6 rounded-sm'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className='rounded-sm w-6 h-6'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "Bus",
    header: "Bus",
    cell: ({ row }) => (
      <div className="flex space-x-4">
        <span className='w-[35px] h-[35px] flex-none rounded-full bg-gray-200 flex justify-center items-center'>
          <FaBus className=' text-xl text-gray-500' />
        </span>
        <div className='flex flex-col space-y-1'>
          <span className='uppercase text-sm'>{row.original.name}</span>
          <span className=' text-xs'>{row.original.typeOil}</span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "Trajet",
    header: ({ column }) => {
      return (
        <div
          className='cursor-pointer flex items-center'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Trajet
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </div>
      )
    },
    cell: ({ row }) => <div className="flex items-center space-x-2">
      <span className=' px-2 text-xs py-0.5 rounded-md bg-violet-600 text-white'>{row.original.trajet.start}</span>
      <FaArrowRightLong className=' text-gray-500' />
      <span className=' px-2 text-xs py-0.5 rounded-md bg-violet-600/35 '>{row.original.trajet.end}</span>
    </div>,
  },
  {
    accessorKey: "startDate",
    header: () => "Date de depart",
    cell: ({ row }) => <span className='text-gray-500'>{row.getValue("startDate")}</span>
  },
  {
    accessorKey: "time",
    header: () => "Time",
    cell: ({ row }) => <span className='text-gray-500'>{row.getValue("time")}</span>,
  },
  {
    accessorKey: "Ticket restant",
    header: () => "Ticket restant",
    cell: ({ row }) => {
      return <span className='px-2 rounded-xl justify-center items-center inline-flex py-1 bg-gray-100 border'>{row.original.ticket.note} / {row.original.ticket.total}</span>
    },
  },
  {
    accessorKey: "status",
    header: () => "Status",
    cell: ({ row }) => {
      return <span className={`px-3 py-1 rounded ${row.original.status ? 'bg-green-100 text-green-600':'bg-red-100 text-red-400'}`}>
        {row.original.status ? 'Active':'Arrêt'}
      </span>
    },
  },
  {
    id: "ticket",
    enableHiding: false,
    cell: ({ row }) => {
      return <Button variant="outline" size='sm'> Ticket </Button>
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Supprimer</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Voir les details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]


interface DashboardTableProps {
  className ?: string
}

export function DashboardTable({ className = '' }: DashboardTableProps) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
 
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
  })
 
  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center py-4">
        {
        /* 
          <Input
            placeholder="Filter emails..."
            value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("email")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          /> 
        */
        }
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead className=' _text-white _bg-violet-700' key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
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
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
