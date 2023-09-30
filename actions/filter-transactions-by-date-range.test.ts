import { filterTransactionsByDateRange } from "./filter-transactions-by-date-range";
import { Item } from "@/components/dashboard/data/schema";

describe("filterTransactionsByDateRange", () => {
  const transactions: Item[] = [
    {
      id: "4292667377274",
      merchantId: "2072766840",
      paymentNode: 613016,
      cnpjRoot: 268179,
      date: "2023-08-01T00:00:34.730Z",
      paymentType: "Débito",
      cardBrand: "Visa",
      authorizationCode: "871756",
      truncatedCardNumber: "5373",
      grossAmount: 349.01,
      netAmount: 56.17,
      terminal: "83585044",
      administrationFee: 7.2,
      channelCode: 16,
      channel: "Máquina",
      withdrawAmount: 4.21,
      minimumMDRAmmount: 2.75,
      mdrTaxAmount: 6.02,
      mdrFeeAmount: 1.11,
      status: "Pending",
    },
    {
      id: "4265343600884",
      merchantId: "2803934933",
      paymentNode: 316448,
      cnpjRoot: 846221,
      date: "2023-08-02T00:00:59.470Z",
      paymentType: "Crédito à vista",
      cardBrand: "Hipercard",
      authorizationCode: "760394",
      truncatedCardNumber: "8428",
      grossAmount: 327.07,
      netAmount: 67.98,
      terminal: "73516221",
      administrationFee: 7.2,
      channelCode: 10,
      channel: "Ecommerce",
      withdrawAmount: 9.73,
      minimumMDRAmmount: 8.77,
      mdrTaxAmount: 0.42,
      mdrFeeAmount: 5.53,
      status: "Approved",
    },
    {
      id: "8501881745643",
      merchantId: "2511738031",
      paymentNode: 340925,
      cnpjRoot: 600684,
      date: "2023-08-03T00:17:37.401Z",
      paymentType: "Crédito à vista",
      cardBrand: "Hipercard",
      authorizationCode: "123087",
      truncatedCardNumber: "6962",
      grossAmount: 214.54,
      netAmount: 53.78,
      terminal: "15663195",
      administrationFee: 5.6,
      channelCode: 14,
      channel: "Ecommerce",
      withdrawAmount: 39.26,
      minimumMDRAmmount: 0.44,
      mdrTaxAmount: 3.55,
      mdrFeeAmount: -5.61,
      status: "Approved",
    },
  ];

  it("should return an empty array if there are no transactions in the date range", () => {
    const startDate = "2022-02-01T00:00:00.000Z";
    const finalDate = "2022-02-28T23:59:59.999Z";

    const result = filterTransactionsByDateRange(
      transactions,
      startDate,
      finalDate
    );

    expect(result).toEqual([]);
  });

  it("should return all transactions if the date range includes all transactions", () => {
    const startDate = "2023-06-01T00:00:34.730Z";
    const finalDate = "2023-10-01T00:00:34.730Z";

    const result = filterTransactionsByDateRange(
      transactions,
      startDate,
      finalDate
    );

    expect(result).toEqual(transactions);
  });

  it("should return only transactions within the date range", () => {
    const startDate = "2023-08-01T00:00:34.730Z";
    const finalDate = "2023-08-02T23:59:59.999Z";

    const result = filterTransactionsByDateRange(
      transactions,
      startDate,
      finalDate
    );

    expect(result).toHaveLength(3);
  });
});
