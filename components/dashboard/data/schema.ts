import { z } from "zod";

// Task Example - TO DELETE
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
});

export type Task = z.infer<typeof taskSchema>;

// END Task Example

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
  cnpjRoot: z.number(),
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

export const mockedDataSchema = z.object({
  summary: summarySchema,
  pagination: paginationSchema,
  items: z.array(itemSchema),
});

export type MockedData = z.infer<typeof mockedDataSchema>;
export type Item = z.infer<typeof itemSchema>;
export type Pagination = z.infer<typeof paginationSchema>;
