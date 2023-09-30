import { z } from "zod";

export const summarySchema = z.object({
  totalQuantity: z.number(),
  totalAmount: z.number(),
  totalNetAmount: z.number(),
  totalAverageAmount: z.number(),
  initialDate: z.string(),
  finalDate: z.string(),
});

export const paginationSchema = z.object({
  pageNumber: z.number(),
  pageSize: z.number(),
  totalElements: z.number(),
  numPages: z.number(),
  lastPage: z.boolean(),
  firstPage: z.boolean(),
});

export const itemSchema = z.object({
  id: z.string(),
  merchantId: z.string(),
  paymentNode: z.number(),
  cnpjRoot: z.number().min(0o0).max(999999),
  date: z.string(),
  paymentType: z.string(),
  cardBrand: z.string(),
  authorizationCode: z.string(),
  truncatedCardNumber: z.string(),
  grossAmount: z.number(),
  netAmount: z.number(),
  terminal: z.string(),
  administrationFee: z.number(),
  channelCode: z.number(),
  channel: z.string(),
  withdrawAmount: z.number(),
  minimumMDRAmmount: z.number(),
  mdrTaxAmount: z.number(),
  mdrFeeAmount: z.number(),
  status: z.enum(["Approved", "Pending", "Denied"]),
});

const countsByDateSchema = z.record(z.record(z.number()));
const countsByStatusSchema = z.record(z.number());
const countsByBrandSchema = z.record(z.number());

export const countSchema = z.object({
  countsByDay: countsByDateSchema,
  countsByStatus: countsByStatusSchema,
  countsByBrand: countsByBrandSchema,
});

export const mockedDataSchema = z.object({
  summary: summarySchema,
  pagination: paginationSchema,
  counts: countSchema,
  items: z.array(itemSchema),
});

export type MockedData = z.infer<typeof mockedDataSchema>;
export type Summary = z.infer<typeof summarySchema>;
export type Item = z.infer<typeof itemSchema>;
export type Pagination = z.infer<typeof paginationSchema>;
