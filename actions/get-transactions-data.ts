export interface TransactionsDataParams {
  initialDate: string | string[] | undefined;
  finalDate: string | string[] | undefined;
  limit: number;
  offset: number;
  status: string | string[] | undefined;
  cardBrand: string | string[] | undefined;
}

export async function getTransactionsData(params: TransactionsDataParams) {
  const getTransactionsDataParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value === null || value === undefined) {
      getTransactionsDataParams.delete(key);
    } else {
      getTransactionsDataParams.set(key, encodeURIComponent(value));
    }
  }

  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_API_BASE_URL
    }/transactions?${getTransactionsDataParams.toString()}`
  );

  if (!res.ok) {
    // This will activate the `error.ts` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
