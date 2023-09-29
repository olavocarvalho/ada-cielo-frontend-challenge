import { Summary } from "@/components/dashboard/data/schema";
import {
  DEFAULT_FINAL_DATE,
  DEFAULT_INITIAL_DATE,
  DEFAULT_PAGE_SIZE,
} from "@/config/dashboard";
import { NextResponse, NextRequest } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import { Item } from "@/components/dashboard/data/schema";
import { filterTransactionsByDateRange } from "@/actions/filter-transactions-by-date-range";
import { filterTransactionsByFilters } from "@/actions/filter-transactions-by-filters";

async function jsonReader(filename: string): Promise<Item[]> {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "json/");
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + filename, "utf8");
  //Return the content of the data file in json format
  return JSON.parse(fileContents);
}

function summarizer(accumulator: Partial<Summary>, item: Item) {
  // Increment the total quantity by 1 for each item
  accumulator.totalQuantity!++;

  // Accumulate total amount and total net amount
  accumulator.totalAmount! += item.grossAmount;
  accumulator.totalNetAmount! += item.netAmount;

  return accumulator;
}

export async function GET(request: NextRequest) {
  const filters = {
    status: request.nextUrl.searchParams.get("status"),
    cardBrand: request.nextUrl.searchParams.get("cardBrand"),
  };

  const dataRange = {
    initialDate: request.nextUrl.searchParams.get("initialDate"),
    finalDate: request.nextUrl.searchParams.get("finalDate"),
  };

  const _pagination = {
    limit: request.nextUrl.searchParams.get("limit")
      ? parseInt(request.nextUrl.searchParams.get("limit")!)
      : DEFAULT_PAGE_SIZE,
    offset: request.nextUrl.searchParams.get("offset")
      ? parseInt(request.nextUrl.searchParams.get("offset")!)
      : 0,
  };

  try {
    // Read the file synchronously and parse its contents
    const transactionsData = await jsonReader("data.json");

    const startDate = dataRange.initialDate
      ? decodeURIComponent(dataRange.initialDate)
      : DEFAULT_INITIAL_DATE;
    const finalDate = dataRange.finalDate
      ? decodeURIComponent(dataRange.finalDate)
      : DEFAULT_FINAL_DATE;

    const filteredByDateRange = filterTransactionsByDateRange(
      transactionsData,
      startDate,
      finalDate
    );

    const filteredByFilters = filterTransactionsByFilters(
      filteredByDateRange,
      filters
    );

    const partialSummary = filteredByDateRange.reduce(summarizer, {
      totalQuantity: 0,
      totalAmount: 0,
      totalNetAmount: 0,
    });

    const summary = {
      totalQuantity: partialSummary.totalQuantity,
      totalAmount: partialSummary.totalAmount,
      totalNetAmount: partialSummary.totalNetAmount,
      totalAverageAmount: (
        partialSummary.totalAmount! / partialSummary.totalQuantity!
      ).toFixed(2),
      initialDate: startDate,
      finalDate: finalDate,
    };

    const pagination = {
      pageNumber: _pagination.offset / _pagination.limit + 1,
      pageSize: _pagination.limit,
      totalElements: 1546,
      numPages: Math.ceil(filteredByFilters.length / _pagination.limit),
      lastPage: false,
      firstPage: false,
    };

    return NextResponse.json({
      data: {
        summary,
        pagination,
        items: filteredByFilters.slice(
          _pagination.offset,
          _pagination.offset + _pagination.limit
        ),
      },
    });
  } catch (error) {
    console.error("Error reading or parsing the JSON file:", error);
  }
}
