export function filterTransactionsByFilters(
  data: any[],
  filters: Record<string, any>
): any[] {
  let filteredData = data;

  for (const [key, value] of Object.entries(filters)) {
    if (value !== null) {
      const values = value.split(".");
      filteredData = filteredData.filter((item) => {
        const itemValues = item[key].split(".");
        return values.some((val: any) => itemValues.includes(val));
      });
    }
  }

  return filteredData;
}
