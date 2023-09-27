import {
  Item,
  MockedData,
  itemSchema,
  taskSchema,
} from "@/components/dashboard/data/schema";
import { columns } from "@/components/dashboard/table/columns";
import { DataTable } from "@/components/dashboard/table/data-table";
import { ThemeToggle } from "@/components/theme-toggle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDateRangePicker } from "@/components/ui/date-range-picker";
import { formatPrice } from "@/lib/utils";
import { Metadata } from "next";
import { z } from "zod";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Example dashboard app built using the JSON provided to ADA & Cielo Bootcamp Challenge.",
};

async function getDashboardData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/dashboard`);

  if (!res.ok) {
    // This will activate the `error.ts` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getTasksData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/tasks`);

  if (!res.ok) {
    // This will activate the `error.ts` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const { data: dashboardData }: { data: MockedData } =
    await getDashboardData();

  const mockedTasks = await getTasksData();

  const transactions = z.array(itemSchema).parse(dashboardData.items);

  const fees =
    dashboardData.summary.totalAmount - dashboardData.summary.totalNetAmount;
  const roundedFees = parseFloat(fees.toFixed(2));

  const countUniqueTypes = (transactions: Item[]): Record<string, number> => {
    return transactions.reduce(
      (counts, transaction) => {
        const { paymentType, cardBrand, channelCode, status } = transaction;

        // Count paymentType
        counts.paymentType[paymentType] =
          (counts.paymentType[paymentType] || 0) + 1;

        // Count cardBrand
        counts.cardBrand[cardBrand] = (counts.cardBrand[cardBrand] || 0) + 1;

        // Count channelCode
        counts.channelCode[channelCode.toString()] =
          (counts.channelCode[channelCode.toString()] || 0) + 1;

        // Count status
        counts.status[status] = (counts.status[status] || 0) + 1;

        return counts;
      },
      {
        paymentType: {},
        cardBrand: {},
        channelCode: {},
        status: {},
      }
    );
  };

  const dashboardDataCounts = countUniqueTypes(transactions);

  console.log(dashboardDataCounts);

  return (
    <div className="flex flex-col pb-8">
      <div className="border-b">
        <div className="flex h-16 items-center px-4 max-w-6xl mx-auto justify-between">
          <h1>ADA & Cielo Bootcamp Challenge</h1>
          <ThemeToggle />
        </div>
      </div>
      <div className="flex flex-col space-y-6 mt-6 max-w-6xl mx-auto px-4 w-full">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <CalendarDateRangePicker
              initialFrom={dashboardData.summary.initialDate}
              initialTo={dashboardData.summary.finalDate}
              disabled
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
                {dashboardData.summary.totalQuantity}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {formatPrice(dashboardData.summary.totalAverageAmount)} average
                per transaction
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
                {formatPrice(dashboardData.summary.totalAmount)}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                including {formatPrice(roundedFees)} of fees and charges
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
                {formatPrice(dashboardData.summary.totalNetAmount)}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                excluding {formatPrice(roundedFees)} of fees and charges
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium uppercase">
                Average Amount
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
                {formatPrice(dashboardData.summary.totalAverageAmount)}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Per transaction
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-1">
          <Card>
            <CardContent className="mt-6">
              <DataTable data={transactions} columns={columns} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
