import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
}

export function formatCnpj(cnpjRoot: number): string {
  const cnpjRootPartOne = cnpjRoot.toString().slice(0, 3);
  const cnpjRootPartTwo = cnpjRoot.toString().slice(3);
  return `${cnpjRootPartOne}.${cnpjRootPartTwo}.***/****-**`;
}

export function formatDate(date: string) {
  const inputDate = new Date(date);

  const formattedDate = new Intl.DateTimeFormat("en-US").format(inputDate);

  return formattedDate;
}
