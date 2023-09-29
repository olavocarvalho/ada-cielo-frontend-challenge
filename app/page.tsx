import { cardBrands, statuses } from "@/components/dashboard/data/data";
import {
  Item,
  MockedData,
  itemSchema,
} from "@/components/dashboard/data/schema";
import { columns } from "@/components/dashboard/table/columns";
import { DataTable } from "@/components/dashboard/table/data-table";
import { ThemeToggle } from "@/components/theme-toggle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDateRangePicker } from "@/components/dashboard/calendar-date-range-picker";
import { DEFAULT_PAGE_SIZE } from "@/config/dashboard";
import { formatPrice } from "@/lib/utils";
import { Metadata } from "next";
import { z } from "zod";
import { getTransactionsData } from "@/actions/get-transactions-data";

interface DashboardPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Example dashboard app built using the JSON provided to ADA & Cielo Bootcamp Challenge.",
};

export default async function Dashboard({ searchParams }: DashboardPageProps) {
  // Get the Dashboard State from the searchParams
  const { initialDate, finalDate, page, per_page, status, cardBrand } =
    searchParams || {};

  console.log(searchParams);

  // Number of items per page
  const limit =
    typeof per_page === "string" ? parseInt(per_page) : DEFAULT_PAGE_SIZE;

  // Number of items to skip [pageSize * (pageNumber - 1)]
  const offset =
    typeof page === "string"
      ? parseInt(page) > 0
        ? (parseInt(page) - 1) * limit
        : 0
      : 0;

  const { data: transactionsData }: { data: MockedData } =
    await getTransactionsData({
      initialDate,
      finalDate,
      limit,
      offset,
      status,
      cardBrand,
    });

  const transactions = z.array(itemSchema).parse(transactionsData.items);

  const fees =
    transactionsData.summary.totalAmount -
    transactionsData.summary.totalNetAmount;
  const roundedFees = parseFloat(fees.toFixed(2));

  // const countUniqueTypes = (transactions: any[]): Record<string, number> => {
  //   return transactions.reduce(
  //     (counts, transaction) => {
  //       const { paymentType, cardBrand, channelCode, status } = transaction;

  //       // Count paymentType
  //       counts.paymentType[paymentType] =
  //         (counts.paymentType[paymentType] || 0) + 1;

  //       // Count cardBrand
  //       counts.cardBrand[cardBrand] = (counts.cardBrand[cardBrand] || 0) + 1;

  //       // Count channelCode
  //       counts.channelCode[channelCode.toString()] =
  //         (counts.channelCode[channelCode.toString()] || 0) + 1;

  //       // Count status
  //       counts.status[status] = (counts.status[status] || 0) + 1;

  //       return counts;
  //     },
  //     {
  //       paymentType: {},
  //       cardBrand: {},
  //       channelCode: {},
  //       status: {},
  //     }
  //   );
  // };

  return (
    <div className="flex flex-col pb-8 w-full overflow-x-hidden">
      <div className="border-b">
        <div className="flex h-16 items-center lg:max-w-6xl max-w-xs mx-auto justify-between overflow-x-hidden gap-x-4 px-2">
          <h1>ADA & Cielo Bootcamp</h1>
          <ThemeToggle />
        </div>
      </div>
      <div className="flex flex-col space-y-6 mt-6 lg:max-w-6xl max-w-xs mx-auto w-full px-2">
        <div className="flex items-center justify-between w-full flex-col md:flex-row gap-y-4 md:gap-y-0">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <CalendarDateRangePicker
              initialFrom={transactionsData.summary.initialDate}
              initialTo={transactionsData.summary.finalDate}
              disabled={false}
            />
          </div>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium uppercase">
                Total transactions
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {transactionsData.summary.totalQuantity}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Approveds, pending and denieds
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium uppercase">
                Total Gross Amount
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <path d="M2 10h20" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatPrice(transactionsData.summary.totalAmount)}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Including fees and charges
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium uppercase">
                Total Net Amount
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatPrice(transactionsData.summary.totalNetAmount)}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Excluding {formatPrice(roundedFees)} of fees
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium uppercase">
                Average Amount
              </CardTitle>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.94969 7.49989C9.94969 8.85288 8.85288 9.94969 7.49989 9.94969C6.14691 9.94969 5.0501 8.85288 5.0501 7.49989C5.0501 6.14691 6.14691 5.0501 7.49989 5.0501C8.85288 5.0501 9.94969 6.14691 9.94969 7.49989ZM10.8632 8C10.6213 9.64055 9.20764 10.8997 7.49989 10.8997C5.79214 10.8997 4.37847 9.64055 4.13662 8H0.5C0.223858 8 0 7.77614 0 7.5C0 7.22386 0.223858 7 0.5 7H4.13659C4.37835 5.35935 5.79206 4.1001 7.49989 4.1001C9.20772 4.1001 10.6214 5.35935 10.8632 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H10.8632Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatPrice(transactionsData.summary.totalAverageAmount)}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Per transaction
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-1 overflow-x-scroll">
          <Card className="overflow-x-hidden">
            <CardContent className="mt-6 min-w-full max-w-full overflow-x-scroll">
              <DataTable
                data={transactions}
                columns={columns}
                pageCount={transactionsData.pagination.numPages}
                filterableColumns={[
                  {
                    id: "status",
                    title: "Status",
                    options: statuses,
                  },
                  {
                    id: "cardBrand",
                    title: "Card",
                    options: cardBrands,
                  },
                ]}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
