import { Item } from "@/components/dashboard/data/schema";

export function filterTransactionsByDateRange(
  transactions: Item[],
  startDate: string,
  finalDate: string
): Item[] {
  const startTimestamp = Date.parse(startDate);
  const endTimestamp = Date.parse(finalDate);

  return transactions.filter((item) => {
    const itemTimestamp = Date.parse(item.date);

    return itemTimestamp >= startTimestamp && itemTimestamp <= endTimestamp;
  });
}
