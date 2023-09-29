import { Item } from "@/components/dashboard/data/schema";
import { faker } from "@faker-js/faker";
import fs from "fs";
import path from "path";
const generateItem = () => ({
  id: faker.number.int({ min: 4000000000000, max: 9999999999999 }).toString(),
  merchantId: faker.number.int({ min: 2000000000, max: 2999999999 }).toString(),
  paymentNode: faker.number.int({ min: 100000, max: 999999 }),
  cnpjRoot: faker.number.int({ min: 100000, max: 999999 }),
  date: faker.date
    .between({
      from: "2023-08-01T00:00:00.000Z",
      to: "2023-09-29T00:00:00.000Z",
    })
    .toISOString(),
  paymentType: faker.helpers.arrayElement([
    "Crédito à vista",
    "Crédito parcelado",
    "Débito",
  ]),
  cardBrand: faker.helpers.arrayElement([
    "Mastercard",
    "Elo",
    "Visa",
    "Hipercard",
  ]),
  authorizationCode: faker.number.int({ min: 100000, max: 999999 }).toString(),
  truncatedCardNumber: faker.number.int({ min: 1000, max: 9999 }).toString(),
  grossAmount: faker.number.float({ min: 50, max: 354, precision: 0.01 }),
  netAmount: faker.number.float({ min: 50, max: 150, precision: 0.01 }),
  terminal: faker.number.int({ min: 10000000, max: 99999999 }).toString(),
  administrationFee: faker.number.float({ min: 1, max: 10, precision: 0.1 }),
  channelCode: faker.number.int({ min: 10, max: 19 }),
  channel: faker.helpers.arrayElement([
    "Super Link / Digitada",
    "Máquina",
    "Ecommerce",
  ]),
  withdrawAmount: faker.number.float({ min: 0, max: 50, precision: 0.01 }),
  minimumMDRAmmount: faker.number.float({
    min: -10,
    max: 10,
    precision: 0.01,
  }),
  mdrTaxAmount: faker.number.float({ min: 0, max: 10, precision: 0.01 }),
  mdrFeeAmount: faker.number.float({ min: -10, max: 10, precision: 0.01 }),
  status: faker.helpers.arrayElement(["Approved", "Pending", "Denied"]),
});

const readAndSortData = (data: any) => {
  // Sort the data array based on the 'date' property
  // @ts-ignore
  data.sort((a, b) => new Date(a.date) - new Date(b.date));

  return data;
};

export function generateItems() {
  const numberOfItemsToGenerate = 3460;
  const items = Array.from({ length: numberOfItemsToGenerate }, generateItem);

  const sorted_items = readAndSortData(items);

  const filePath = path.join(__dirname, "./data_3460.json");

  console.log(filePath);
  fs.writeFileSync(filePath, JSON.stringify(sorted_items, null, 2));

  console.log("✅ Transactions data generated.");
}
