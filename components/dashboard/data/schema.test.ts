import { mockedDataSchema, MockedData } from "./schema";

describe("mockedDataSchema", () => {
  it("should validate a valid mocked data object", () => {
    const validMockedData: MockedData = {
      summary: {
        totalQuantity: 10,
        totalAmount: 100,
        totalNetAmount: 90,
        totalAverageAmount: 10,
        initialDate: "2021-01-01",
        finalDate: "2021-01-31",
      },
      pagination: {
        pageNumber: 1,
        pageSize: 10,
        totalElements: 100,
        numPages: 10,
        lastPage: false,
        firstPage: true,
      },
      counts: {
        countsByDay: {
          "2023-09-14": { Approved: 80, Pending: 77, Denied: 85 },
          "2023-09-15": { Denied: 89, Approved: 96, Pending: 116 },
          "2023-09-16": { Approved: 88, Denied: 91, Pending: 93 },
          "2023-09-17": { Denied: 83, Pending: 107, Approved: 96 },
          "2023-09-18": { Denied: 101, Approved: 62, Pending: 83 },
        },
        countsByStatus: { Approved: 422, Pending: 476, Denied: 449 },
        countsByBrand: { Hipercard: 362, Elo: 326, Visa: 326, Mastercard: 333 },
      },
      items: [
        {
          id: "1",
          merchantId: "1",
          paymentNode: 1,
          cnpjRoot: 123456,
          date: "2021-01-01",
          paymentType: "credit",
          cardBrand: "visa",
          authorizationCode: "123456",
          truncatedCardNumber: "1234",
          grossAmount: 100,
          netAmount: 90,
          terminal: "1",
          administrationFee: 10,
          channelCode: 1,
          channel: "online",
          withdrawAmount: 0,
          minimumMDRAmmount: 0,
          mdrTaxAmount: 0,
          mdrFeeAmount: 0,
          status: "Approved",
        },
      ],
    };
    expect(mockedDataSchema.parse(validMockedData)).toEqual(validMockedData);
  });

  it("should throw an error for an invalid mocked data object", () => {
    const invalidMockedData = {
      summary: {
        totalQuantity: 10,
        totalAmount: 100,
        totalNetAmount: 90,
        totalAverageAmount: 10,
        initialDate: "2021-01-01",
        finalDate: "2021-01-31",
      },
      pagination: {
        pageNumber: 1,
        pageSize: 10,
        totalElements: 100,
        numPages: 10,
        lastPage: false,
        firstPage: true,
      },
      counts: {
        countsByDay: {
          "2023-09-14": { Approved: 80, Pending: 77, Denied: 85 },
          "2023-09-15": { Denied: 89, Approved: 96, Pending: 116 },
          "2023-09-16": { Approved: 88, Denied: 91, Pending: 93 },
          "2023-09-17": { Denied: 83, Pending: 107, Approved: 96 },
          "2023-09-18": { Denied: 101, Approved: 62, Pending: 83 },
        },
      },
      items: [
        {
          id: 1,
          merchantId: "1",
          paymentNode: 1,
          cnpjRoot: 123453336,
          date: "2021-01-01",
          paymentType: "invalid payment type",
          cardBrand: "visa",
          authorizationCode: "123456",
          truncatedCardNumber: "1234",
          grossAmount: 100,
          netAmount: 90,
          terminal: "1",
          administrationFee: 10,
          channelCode: 1,
          channel: "online",
          withdrawAmount: 0,
          minimumMDRAmmount: 0,
          mdrTaxAmount: 0,
          mdrFeeAmount: 0,
          status: "Approved",
        },
      ],
    };
    expect(() => mockedDataSchema.parse(invalidMockedData)).toThrow();
  });
});
