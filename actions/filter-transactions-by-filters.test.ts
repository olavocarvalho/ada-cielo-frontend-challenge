import { filterTransactionsByFilters } from "./filter-transactions-by-filters";

describe("filterTransactionsByFilters", () => {
  const data = [
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
      date: "2023-08-01T00:00:59.470Z",
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
      date: "2023-08-01T00:17:37.401Z",
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
    {
      id: "9191154489759",
      merchantId: "2365843398",
      paymentNode: 396787,
      cnpjRoot: 918597,
      date: "2023-08-01T00:20:59.730Z",
      paymentType: "Crédito parcelado",
      cardBrand: "Elo",
      authorizationCode: "341587",
      truncatedCardNumber: "3992",
      grossAmount: 240.07,
      netAmount: 105.96,
      terminal: "79676434",
      administrationFee: 4.3,
      channelCode: 13,
      channel: "Ecommerce",
      withdrawAmount: 17.1,
      minimumMDRAmmount: -3.14,
      mdrTaxAmount: 7.87,
      mdrFeeAmount: 3.31,
      status: "Approved",
    },
  ];

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should return all data when filters are empty", () => {
    const filters = {};
    const result = filterTransactionsByFilters(data, filters);
    expect(result).toEqual(data);
  });

  it("should filter data by status", () => {
    const filters = { status: "Approved" };
    const result = filterTransactionsByFilters(data, filters);
    expect(result).toHaveLength(3);
  });

  it("should filter data by multiple filters (status and cardBrand)", () => {
    const filters = { status: "Pending", cardBrand: "Visa" };
    const result = filterTransactionsByFilters(data, filters);
    expect(result).toHaveLength(1);
  });

  it("should return empty array when no data matches filters", () => {
    const filters = {
      status: "Strange Value",
      cardBrand: "Also A Strange Value",
    };
    const result = filterTransactionsByFilters(data, filters);
    expect(result).toEqual([]);
  });
});
