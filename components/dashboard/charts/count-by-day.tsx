"use client";

import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function convertToRechartsData(inputData) {
  const rechartsData = [];

  // Iterate over the input object
  for (const [date, counts] of Object.entries(inputData)) {
    const entry = { date };
    // Extract counts for each status and add to the entry
    entry.pending = counts["Pending"] || 0;
    entry.approved = counts["Approved"] || 0;
    entry.denied = counts["Denied"] || 0;

    // Push the entry to the Recharts data array
    rechartsData.push(entry);
  }

  return rechartsData;
}

export function CountByDay({ data }: { data: any }) {
  const transformedData = convertToRechartsData(data);

  console.log(transformedData);
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={transformedData}>
        <XAxis
          dataKey="date"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) =>
            `${value.split("-")[1]}/${value.split("-")[2]}`
          }
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="denied" fill="#f43f5e" stackId="a" />
        <Bar dataKey="pending" stackId="a" fill="#fcd34d" />
        <Bar
          dataKey="approved"
          stackId="a"
          fill="#1d4ed8"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
