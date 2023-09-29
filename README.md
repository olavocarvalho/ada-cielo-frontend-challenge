# ADA & Cielo Bootcamp - Final Challenge

The challenge is to transform the information (the json provided) from a legacy system into a Service/API to be exposed and consumed by the application as a data source to develop an application that adds analytical value to the end customer.

Due to time constraints and limited data availability, a significant portion of development time was allocated to faking and exposing data through an HTTP API. Consequently, the application does not currently incorporate essential analytical components like charts. Future iterations of the app will prioritize the integration of suitable charting libraries to provide insightful visualizations for a more comprehensive analytical experience. Some charts I was planning to have: Transactions by day, Count transactions by status, Count transactions by Card Brand.

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

## Tech Stack

### Frameworks

- [Next.js](https://nextjs.org/) – React framework for building performant apps with the best developer experience

### UI

- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development
- [Radix](https://www.radix-ui.com/) – Primitives like modal, popover, etc. to build a stellar user experience
- [Shadcn UI](https://ui.shadcn.com) – Beautifully designed components using tailwind and radix
- [Lucide](https://lucide.dev/) – Beautifully simple, pixel-perfect icons

### Code Quality

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [Prettier](https://prettier.io/) – Opinionated code formatter for consistent code style
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript

# How to run the project

## App in dev mode

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

## Running Tests

To run the tests, use the following command:

```bash
npm test
```

This command will execute all the tests using Jest and provide the test reports and output.

# Code Style Conventions and Best Practices

## Best Practices

### Container and Presentational Components

To follow the separation of concerns principle by differentiating between container components (handling logic and data) and presentational components (handling UI) we have the structure below:

```
components/
|-- ui/
  |-- button.tsx
  |-- dropdown-menu.tsx
  theme-provider.tsx
  theme-toggle.tsx
```

### Files and Components Naming Convention

Files should be named using kebab-case and components should use PascalCase;

### Utility Files

Utility files or helper functions should be placed inside lib folder in the project root.

```
lib/
|-- utils.ts
|-- other-file.ts
```

## Testing

### Unit and Integration Testing

- **Jest**: A popular JavaScript testing framework that provides a powerful and flexible testing environment.

  - Version: ^29.6.2

- **@testing-library/react**: A simple and complete testing utility for React components.

  - Version: ^14.0.0

- **@testing-library/jest-dom**: Custom Jest matchers for asserting on DOM elements.

  - Version: 6.1.2

- **@testing-library/user-event**: A companion library for @testing-library/react that provides utilities for simulating user events.

  - Version: ^14.4.3

- **@types/jest, @types/react, @types/react-dom**: TypeScript type definitions for Jest, React, and React DOM.
  - Version: latest

# Authors

- [Olavo de Carvalho](https://github.com/olavocarvalho)
