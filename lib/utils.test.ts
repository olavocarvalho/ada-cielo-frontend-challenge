import { cn, formatPrice, formatCnpj, formatDate } from "./utils";

describe("cn", () => {
  it("should return a string with the concatenated class names", () => {
    expect(cn("class1", "class2")).toEqual("class1 class2");
  });

  it("should return a string with the concatenated class names and ignore falsy values", () => {
    expect(cn("class1", null, undefined, "class2")).toEqual("class1 class2");
  });
});

describe("formatPrice", () => {
  it("should format a number as BRL currency", () => {
    expect(formatPrice(1000)).toEqual("R$ 1.000,00");
  });
});

describe("formatCnpj", () => {
  it("should format a number as a CNPJ string", () => {
    expect(formatCnpj(123456)).toEqual("123.456.***/****-**");
  });
});

describe("formatDate", () => {
  it("should format a date string as a US date", () => {
    expect(formatDate("1987-05-05")).toEqual("5/4/1987");
  });
});
