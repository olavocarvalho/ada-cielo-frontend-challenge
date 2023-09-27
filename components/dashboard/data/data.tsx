import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

export const paymentType = [
  {
    value: "Crédito à vista",
    label: "Crédito à vista",
  },
];

export const cardBrand = [
  {
    value: "Mastercard",
    label: "Mastercard",
    imagePath: "/card_brands/mastercard_2x.webp",
  },
  {
    value: "Elo",
    label: "Elo",
    imagePath: "/card_brands/elo_2x.webp",
  },
  {
    value: "Visa",
    label: "Visa",
    imagePath: "/card_brands/visa_2x.webp",
  },
  {
    value: "Hipercard",
    label: "Hipercard",
    imagePath: "/card_brands/hipercard_2x.webp",
  },
];

export const channel = [
  {
    value: "Super Link / Digitada",
    label: "Super Link / Digitada",
  },
  {
    value: "Ecommerce",
    label: "Ecommerce",
  },
  {
    value: "Máquina",
    label: "Máquina",
  },
  {
    value: "Hipercard",
    label: "Hipercard",
  },
];
export const statuses = [
  {
    value: "Approved",
    label: "Approved",
  },
  {
    value: "Pending",
    label: "Pending",
  },
  {
    value: "Denied",
    label: "Denied",
  },
];

// TASKS EXAMPLE

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];

export const statusesS = [
  {
    value: "backlog",
    label: "Backlog",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "todo",
    label: "Todo",
    icon: CircleIcon,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: StopwatchIcon,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircledIcon,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CrossCircledIcon,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
  },
];
