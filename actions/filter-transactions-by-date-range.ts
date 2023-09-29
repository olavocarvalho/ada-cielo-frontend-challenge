import { Item } from "@/components/dashboard/data/schema";

export function filterTransactionsByDateRange(
  transactions: Item[],
  startDate: string,
  finalDate: string
): Item[] {
  const startTimestamp = Date.parse(startDate);

  const tempDateEnd = new Date(finalDate);
  // Add 1 day to the final date to include it in the range
  tempDateEnd.setDate(tempDateEnd.getDate() + 1);

  const endTimestamp = tempDateEnd.getTime();

  return transactions.filter((item) => {
    const itemTimestamp = Date.parse(item.date);

    return itemTimestamp >= startTimestamp && itemTimestamp <= endTimestamp;
  });
}
