"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";

import { cardBrands, statuses } from "../data/data";
import { Item } from "../data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import Image from "next/image";
import { formatCnpj, formatDate, formatPrice } from "@/lib/utils";
import { ComputerIcon } from "lucide-react";

export const columns: ColumnDef<Item>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Transaction ID" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex flex-col space-y-1 mr-4">
          <div className="w-auto">{row.getValue("id")}</div>
          <div className="text-xs inline-flex text-slate-400">
            <ComputerIcon className="mr-1 h-4 w-4 text-slate-400" />
            {row.original.terminal}
          </div>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-auto items-center mr-4">
          <span>{formatDate(row.original.date)}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "merchant",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Merchant" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex flex-col space-y-1 min-w-[130px]">
          <span className="w-fit inline-flex text-xs font-semibold">
            {formatCnpj(row.original.cnpjRoot)}
          </span>
          <span className="text-slate-500 w-auto truncate font-medium text-xs">
            {row.original.merchantId}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "GrossAmount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Gross Amount" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          {formatPrice(row.original.grossAmount)}
        </div>
      );
    },
  },
  {
    accessorKey: "NetAmount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Net Amount" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-auto items-center">
          {formatPrice(row.original.netAmount)}
        </div>
      );
    },
  },
  {
    accessorKey: "AdmFee",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Adm. Fee" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-fit items-center">
          {formatPrice(row.original.administrationFee)}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-fit items-center mr-4">
          <Badge variant={row.original.status}>{status.label}</Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "Channel",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Channel" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-1 mr-4">
          <Badge variant="outline">{row.original.channelCode}</Badge>
          <span className="w-fit truncate font-medium">
            {row.original.channel}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "cardBrand",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Card" />
    ),
    cell: ({ row }) => {
      const card = cardBrands.find(
        (brand) => brand.value === row.original.cardBrand
      );

      return (
        <div className="flex items-center mr-4">
          {card && card.imagePath && (
            <div className="mr-2 h-auto w-[32px] text-muted-foreground">
              <Image
                src={card.imagePath}
                alt={card.label}
                width={28}
                height={17}
              />
            </div>
          )}
          <span className="font-medium text-slate-500">
            {row.original.truncatedCardNumber}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      console.log(row, id, value);
      return value.includes(row.original.cardBrand);
    },
  },
];
