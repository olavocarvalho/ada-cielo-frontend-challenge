# ADA & Cielo Bootcamp - Final Challenge

The challenge is to transform the information (the json provided) from a legacy system into a Service/API to be exposed and consumed by the application as a data source to develop an application that adds analytical value to the end customer.

In enterprise companies, a end customer can represent many diferent roles, I'll assume that is a Business Analyst from .

## Exploratory Data Analysis

To create an application that adds analytical value, the first step is to perform a exploratory data analysis (EDA) based on the provided JSON data. I started by understanding the structure of the data and explaining each property in both the "summary" and "items" objects.

### Summary

The "summary" object provides a high-level summary of the data:

1. **totalQuantity**: Total number of transactions (items) in the dataset.
2. **totalAmount**: The total gross amount across all transactions.
3. **totalNetAmount**: The total net amount (after deductions like fees) across all transactions.
4. **totalAverageAmount**: The average amount per transaction.
5. **initialDate**: The start date of the data.
6. **finalDate**: The end date of the data.

### Items

The "items" array contains individual transaction records, each represented by an object with various properties. Here's a summary of the properties in each item:

#### Categorical Variables:

Certain properties are categorical, meaning they represent discrete and distinct categories. Here are the properties identified as categorical and their respective enumerated values:

1. **Payment Type**

   - Enum Values: "Crédito à vista"

2. **Card Brand**

   - Enum Values: "Mastercard", "Elo", "Visa", "Hipercard"

3. **Channel**

   - Enum Values: "Super Link / Digitada", "Máquina", "Ecommerce"

4. **Status**
   - Enum Values: "Aprovada", "Pendente", "Negada"

#### Nominal Variables:

- **id**: Transaction ID.
- **merchantId**: ID of the merchant.
- **paymentNode**: Payment node identifier.
- **cnpjRoot**: CNPJ root identifier.
- **terminal**: Terminal used for the transaction (discrete).
- **channelCode**: Channel code indicating the transaction channel (discrete).

### Continuous Variables:

Continuous variables are measurable and can take any numerical value within a range.

- **date**: Date and time of the transaction.
- **grossAmount**: Gross transaction amount.
- **netAmount**: Net transaction amount after deductions.
- **administrationFee**: Fee associated with administration.
- **withdrawAmount**: Withdrawal amount.
- **minimumMDRAmmount**: Minimum MDR (Merchant Discount Rate) amount.
- **mdrTaxAmount**: MDR tax amount.
- **mdrFeeAmount**: MDR fee amount.

# How to run the project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, create .env.local file from the .env.example and set the environment variables, then:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
