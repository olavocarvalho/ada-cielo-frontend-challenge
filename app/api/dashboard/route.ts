import { MockedData } from "@/components/dashboard/data/schema";
import { NextResponse } from "next/server";

export async function GET() {
  const mocked_data: MockedData = {
    summary: {
      totalQuantity: 1546,
      totalAmount: 313388,
      totalNetAmount: 301847.02,
      totalAverageAmount: 202.71,
      initialDate: "2021-05-26",
      finalDate: "2021-05-26",
    },
    pagination: {
      pageNumber: 60,
      pageSize: 25,
      totalElements: 1546,
      numPages: 62,
      lastPage: false,
      firstPage: false,
    },
    items: [
      {
        id: "114606514478703",
        merchantId: "2000463023",
        paymentNode: 485173,
        cnpjRoot: 485116,
        date: "2021-05-26T12:12:55",
        paymentType: "Crédito à vista",
        cardBrand: "Mastercard",
        authorizationCode: "378216",
        truncatedCardNumber: "1014",
        grossAmount: 80.0,
        netAmount: 76.88,
        terminal: "00032668",
        administrationFee: 3.9,
        channelCode: 15,
        channel: "Super Link / Digitada",
        withdrawAmount: 0.0,
        minimumMDRAmmount: -3.12,
        mdrTaxAmount: 0.0,
        mdrFeeAmount: -3.12,
        status: "Approved",
      },
      {
        id: "114606514478704",
        merchantId: "2000463023",
        paymentNode: 485173,
        cnpjRoot: 485116,
        date: "2021-05-26T12:12:55",
        paymentType: "Crédito à vista",
        cardBrand: "Mastercard",
        authorizationCode: "378218",
        truncatedCardNumber: "1014",
        grossAmount: 80.0,
        netAmount: 76.88,
        terminal: "00032668",
        administrationFee: 3.9,
        channelCode: 15,
        channel: "Super Link / Digitada",
        withdrawAmount: 0.0,
        minimumMDRAmmount: -3.12,
        mdrTaxAmount: 0.0,
        mdrFeeAmount: -3.12,
        status: "Approved",
      },
      {
        id: "114606514478705",
        merchantId: "2000463023",
        paymentNode: 485173,
        cnpjRoot: 485116,
        date: "2021-05-26T12:12:55",
        paymentType: "Crédito à vista",
        cardBrand: "Mastercard",
        authorizationCode: "378224",
        truncatedCardNumber: "1014",
        grossAmount: 90.0,
        netAmount: 86.49,
        terminal: "00032668",
        administrationFee: 3.9,
        channelCode: 15,
        channel: "Super Link / Digitada",
        withdrawAmount: 0.0,
        minimumMDRAmmount: -3.51,
        mdrTaxAmount: 0.0,
        mdrFeeAmount: -3.51,
        status: "Approved",
      },
      {
        id: "114606514478706",
        merchantId: "2000463023",
        paymentNode: 485173,
        cnpjRoot: 485116,
        date: "2021-05-26T12:12:55",
        paymentType: "Crédito à vista",
        cardBrand: "Mastercard",
        authorizationCode: "378226",
        truncatedCardNumber: "1014",
        grossAmount: 90.0,
        netAmount: 86.49,
        terminal: "00032668",
        administrationFee: 3.9,
        channelCode: 15,
        channel: "Super Link / Digitada",
        withdrawAmount: 0.0,
        minimumMDRAmmount: -3.51,
        mdrTaxAmount: 0.0,
        mdrFeeAmount: -3.51,
        status: "Approved",
      },
      {
        id: "114606514478701",
        merchantId: "2000463023",
        paymentNode: 485173,
        cnpjRoot: 485116,
        date: "2021-05-26T12:12:55",
        paymentType: "Crédito à vista",
        cardBrand: "Mastercard",
        authorizationCode: "378204",
        truncatedCardNumber: "1014",
        grossAmount: 70.0,
        netAmount: 67.27,
        terminal: "32668",
        administrationFee: 3.9,
        channelCode: 1,
        channel: "Máquina",
        withdrawAmount: 0.0,
        minimumMDRAmmount: 0.0,
        mdrTaxAmount: 0.0,
        mdrFeeAmount: -2.73,
        status: "Approved",
      },
      {
        id: "114606514478705",
        merchantId: "2000463023",
        paymentNode: 485173,
        cnpjRoot: 485116,
        date: "2021-05-26T12:12:55",
        paymentType: "Crédito à vista",
        cardBrand: "Mastercard",
        authorizationCode: "378224",
        truncatedCardNumber: "1014",
        grossAmount: 90.0,
        netAmount: 86.49,
        terminal: "32668",
        administrationFee: 3.9,
        channelCode: 1,
        channel: "Máquina",
        withdrawAmount: 0.0,
        minimumMDRAmmount: 0.0,
        mdrTaxAmount: 0.0,
        mdrFeeAmount: -3.51,
        status: "Approved",
      },
      {
        id: "114606514478366",
        merchantId: "2000463023",
        paymentNode: 485173,
        cnpjRoot: 485116,
        date: "2021-05-26T12:12:55",
        paymentType: "Crédito à vista",
        cardBrand: "Mastercard",
        authorizationCode: "339150",
        truncatedCardNumber: "1014",
        grossAmount: 90.0,
        netAmount: 86.49,
        terminal: "32668",
        administrationFee: 3.9,
        channelCode: 1,
        channel: "Máquina",
        withdrawAmount: 0.0,
        minimumMDRAmmount: 0.0,
        mdrTaxAmount: 0.0,
        mdrFeeAmount: -3.51,
        status: "Approved",
      },
      {
        id: "114606514478688",
        merchantId: "2000463023",
        paymentNode: 485173,
        cnpjRoot: 485116,
        date: "2021-05-26T12:12:55",
        paymentType: "Crédito à vista",
        cardBrand: "Elo",
        authorizationCode: "378142",
        truncatedCardNumber: "1014",
        grossAmount: 70.0,
        netAmount: 67.27,
        terminal: "32668000",
        administrationFee: 3.9,
        channelCode: 1,
        channel: "Máquina",
        withdrawAmount: 0.0,
        minimumMDRAmmount: 0.0,
        mdrTaxAmount: 0.0,
        mdrFeeAmount: -2.73,
        status: "Approved",
      },
      {
        id: "114606514478686",
        merchantId: "2000463023",
        paymentNode: 485173,
        cnpjRoot: 485116,
        date: "2021-05-26T12:12:55",
        paymentType: "Crédito à vista",
        cardBrand: "Mastercard",
        authorizationCode: "378134",
        truncatedCardNumber: "1014",
        grossAmount: 600.0,
        netAmount: 570.66,
        terminal: "32668000",
        administrationFee: 3.9,
        channelCode: 1,
        channel: "Máquina",
        withdrawAmount: 0.0,
        minimumMDRAmmount: 0.0,
        mdrTaxAmount: 0.0,
        mdrFeeAmount: -20.34,
        status: "Approved",
      },
      {
        id: "114606514478685",
        merchantId: "2000463023",
        paymentNode: 485173,
        cnpjRoot: 485116,
        date: "2021-05-26T12:12:55",
        paymentType: "Crédito à vista",
        cardBrand: "Elo",
        authorizationCode: "378132",
        truncatedCardNumber: "1014",
        grossAmount: 60.0,
        netAmount: 57.66,
        terminal: "32668000",
        administrationFee: 3.9,
        channelCode: 1,
        channel: "Máquina",
        withdrawAmount: 0.0,
        minimumMDRAmmount: 0.0,
        mdrTaxAmount: 0.0,
        mdrFeeAmount: -2.34,
        status: "Approved",
      },
      {
        id: "114606514478684",
        merchantId: "2000463023",
        paymentNode: 485173,
        cnpjRoot: 485116,
        date: "2021-05-26T12:12:55",
        paymentType: "Crédito à vista",
        cardBrand: "Mastercard",
        authorizationCode: "378126",
        truncatedCardNumber: "1014",
        grossAmount: 50.0,
        netAmount: 48.05,
        terminal: "32668000",
        administrationFee: 3.9,
        channelCode: 1,
        channel: "Máquina",
        withdrawAmount: 0.0,
        minimumMDRAmmount: 0.0,
        mdrTaxAmount: 0.0,
        mdrFeeAmount: -1.95,
        status: "Approved",
      },
      {
        id: "114606514478703",
        merchantId: "2000463023",
        paymentNode: 485173,
        cnpjRoot: 485116,
        date: "2021-05-26T12:12:55",
        paymentType: "Crédito à vista",
        cardBrand: "Elo",
        authorizationCode: "378216",
        truncatedCardNumber: "1014",
        grossAmount: 80.0,
        netAmount: 76.88,
        terminal: "32668",
        administrationFee: 3.9,
        channelCode: 1,
        channel: "Máquina",
        withdrawAmount: 0.0,
        minimumMDRAmmount: 0.0,
        mdrTaxAmount: 0.0,
        mdrFeeAmount: -3.12,
        status: "Approved",
      },
      {
        id: "114606514478704",
        merchantId: "2000463023",
        paymentNode: 485173,
        cnpjRoot: 485116,
        date: "2021-05-26T12:12:55",
        paymentType: "Crédito à vista",
        cardBrand: "Mastercard",
        authorizationCode: "378218",
        truncatedCardNumber: "1014",
        grossAmount: 80.0,
        netAmount: 76.88,
        terminal: "32668",
        administrationFee: 3.9,
        channelCode: 1,
        channel: "Máquina",
        withdrawAmount: 0.0,
        minimumMDRAmmount: 0.0,
        mdrTaxAmount: 0.0,
        mdrFeeAmount: -3.12,
        status: "Approved",
      },
      {
        id: "114606514478702",
        merchantId: "2000463023",
        paymentNode: 485173,
        cnpjRoot: 485116,
        date: "2021-05-26T12:12:55",
        paymentType: "Crédito à vista",
        cardBrand: "Mastercard",
        authorizationCode: "378206",
        truncatedCardNumber: "1014",
        grossAmount: 70.0,
        netAmount: 67.27,
        terminal: "32668",
        administrationFee: 3.9,
        channelCode: 1,
        channel: "Máquina",
        withdrawAmount: 0.0,
        minimumMDRAmmount: 0.0,
        mdrTaxAmount: 0.0,
        mdrFeeAmount: -2.73,
        status: "Approved",
      },
      {
        id: "114606514478356",
        merchantId: "2000463023",
        paymentNode: 485173,
        cnpjRoot: 485116,
        date: "2021-05-26T12:12:55",
        paymentType: "Crédito à vista",
        cardBrand: "Mastercard",
        authorizationCode: "339130",
        truncatedCardNumber: "1014",
        grossAmount: 70.0,
        netAmount: 67.27,
        terminal: "32668000",
        administrationFee: 3.9,
        channelCode: 3,
        channel: "Ecommerce",
        withdrawAmount: 0.0,
        minimumMDRAmmount: 0.0,
        mdrTaxAmount: 0.0,
        mdrFeeAmount: -2.73,
        status: "Approved",
      },
      {
        id: "114606514478693",
        merchantId: "2000463023",
        paymentNode: 485173,
        cnpjRoot: 485116,
        date: "2021-05-26T12:12:55",
        paymentType: "Crédito à vista",
        cardBrand: "Visa",
        authorizationCode: "378164",
        truncatedCardNumber: "7972",
        grossAmount: 74.0,
        netAmount: 71.11,
        terminal: "32668",
        administrationFee: 3.9,
        channelCode: 3,
        channel: "Ecommerce",
        withdrawAmount: 0.0,
        minimumMDRAmmount: 0.0,
        mdrTaxAmount: 0.0,
        mdrFeeAmount: -2.89,
        status: "Approved",
      },
      {
        id: "114606514478692",
        merchantId: "2000463023",
        paymentNode: 485173,
        cnpjRoot: 485116,
        date: "2021-05-26T12:12:55",
        paymentType: "Crédito à vista",
        cardBrand: "Visa",
        authorizationCode: "378154",
        truncatedCardNumber: "7972",
        grossAmount: 64.0,
        netAmount: 61.5,
        terminal: "32668",
        administrationFee: 3.9,
        channelCode: 1,
        channel: "Máquina",
        withdrawAmount: 0.0,
        minimumMDRAmmount: 0.0,
        mdrTaxAmount: 0.0,
        mdrFeeAmount: -2.5,
        status: "Pending",
      },
      {
        id: "114606514478357",
        merchantId: "2000463023",
        paymentNode: 485173,
        cnpjRoot: 485116,
        date: "2021-05-26T12:12:55",
        paymentType: "Crédito à vista",
        cardBrand: "Visa",
        authorizationCode: "339132",
        truncatedCardNumber: "7972",
        grossAmount: 54.0,
        netAmount: 51.89,
        terminal: "32668",
        administrationFee: 3.9,
        channelCode: 1,
        channel: "Máquina",
        withdrawAmount: 0.0,
        minimumMDRAmmount: 0.0,
        mdrTaxAmount: 0.0,
        mdrFeeAmount: -2.11,
        status: "Approved",
      },
      {
        id: "114606514478691",
        merchantId: "2000463023",
        paymentNode: 485173,
        cnpjRoot: 485116,
        date: "2021-05-26T12:12:55",
        paymentType: "Crédito à vista",
        cardBrand: "Visa",
        authorizationCode: "378152",
        truncatedCardNumber: "7972",
        grossAmount: 64.0,
        netAmount: 61.5,
        terminal: "32668",
        administrationFee: 3.9,
        channelCode: 1,
        channel: "Máquina",
        withdrawAmount: 0.0,
        minimumMDRAmmount: 0.0,
        mdrTaxAmount: 0.0,
        mdrFeeAmount: -2.5,
        status: "Approved",
      },
      {
        id: "114606514478690",
        merchantId: "2000463023",
        paymentNode: 485173,
        cnpjRoot: 485116,
        date: "2021-05-26T12:12:55",
        paymentType: "Crédito à vista",
        cardBrand: "Hipercard",
        authorizationCode: "378146",
        truncatedCardNumber: "7972",
        grossAmount: 54.0,
        netAmount: 51.89,
        terminal: "32668",
        administrationFee: 3.9,
        channelCode: 1,
        channel: "Máquina",
        withdrawAmount: 0.0,
        minimumMDRAmmount: 0.0,
        mdrTaxAmount: 0.0,
        mdrFeeAmount: -2.11,
        status: "Pending",
      },
      {
        id: "114606514478357",
        merchantId: "2000463023",
        paymentNode: 485173,
        cnpjRoot: 485116,
        date: "2021-05-26T12:12:55",
        paymentType: "Crédito à vista",
        cardBrand: "Visa",
        authorizationCode: "339132",
        truncatedCardNumber: "7972",
        grossAmount: 54.0,
        netAmount: 51.89,
        terminal: "00032668",
        administrationFee: 3.9,
        channelCode: 1,
        channel: "Máquina",
        withdrawAmount: 0.0,
        minimumMDRAmmount: -2.11,
        mdrTaxAmount: 0.0,
        mdrFeeAmount: -2.11,
        status: "Approved",
      },
      {
        id: "114606514478358",
        merchantId: "2000463023",
        paymentNode: 485173,
        cnpjRoot: 485116,
        date: "2021-05-26T12:12:55",
        paymentType: "Crédito à vista",
        cardBrand: "Visa",
        authorizationCode: "339134",
        truncatedCardNumber: "7972",
        grossAmount: 64.0,
        netAmount: 61.5,
        terminal: "00032668",
        administrationFee: 3.9,
        channelCode: 1,
        channel: "Máquina",
        withdrawAmount: 0.0,
        minimumMDRAmmount: -2.5,
        mdrTaxAmount: 0.0,
        mdrFeeAmount: -2.5,
        status: "Approved",
      },
      {
        id: "114606514478359",
        merchantId: "2000463023",
        paymentNode: 485173,
        cnpjRoot: 485116,
        date: "2021-05-26T12:12:55",
        paymentType: "Crédito à vista",
        cardBrand: "Visa",
        authorizationCode: "339136",
        truncatedCardNumber: "7972",
        grossAmount: 74.0,
        netAmount: 71.11,
        terminal: "00032668",
        administrationFee: 3.9,
        channelCode: 1,
        channel: "Máquina",
        withdrawAmount: 0.0,
        minimumMDRAmmount: -2.89,
        mdrTaxAmount: 0.0,
        mdrFeeAmount: -2.89,
        status: "Denied",
      },
      {
        id: "114606514478689",
        merchantId: "2000463023",
        paymentNode: 485173,
        cnpjRoot: 485116,
        date: "2021-05-26T12:12:55",
        paymentType: "Crédito à vista",
        cardBrand: "Elo",
        authorizationCode: "378144",
        truncatedCardNumber: "7972",
        grossAmount: 54.0,
        netAmount: 51.89,
        terminal: "00032668",
        administrationFee: 3.9,
        channelCode: 1,
        channel: "Máquina",
        withdrawAmount: 0.0,
        minimumMDRAmmount: -2.11,
        mdrTaxAmount: 0.0,
        mdrFeeAmount: -2.11,
        status: "Approved",
      },
      {
        id: "114606514478690",
        merchantId: "2000463023",
        paymentNode: 485173,
        cnpjRoot: 485116,
        date: "2021-05-26T12:12:55",
        paymentType: "Crédito à vista",
        cardBrand: "Visa",
        authorizationCode: "378146",
        truncatedCardNumber: "7972",
        grossAmount: 5400.0,
        netAmount: 5100.89,
        terminal: "00032668",
        administrationFee: 3.9,
        channelCode: 1,
        channel: "Máquina",
        withdrawAmount: 0.0,
        minimumMDRAmmount: -200.11,
        mdrTaxAmount: 0.0,
        mdrFeeAmount: -200.11,
        status: "Approved",
      },
    ],
  };

  return NextResponse.json({ data: mocked_data });
}
