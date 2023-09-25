import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Example dashboard app built using the JSON provided to ADA & Cielo Bootcamp Challenge.",
};

async function getDashboardData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/dashboard`);

  if (!res.ok) {
    // This will activate the `error.ts` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getDashboardData();

  return <main className="min-h-screen w-full">{JSON.stringify(data)}</main>;
}
