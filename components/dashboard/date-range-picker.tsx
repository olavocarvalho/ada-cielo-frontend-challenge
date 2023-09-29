"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, format, set } from "date-fns";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface CalendarDateRangePickerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  initialFrom: string;
  initialTo: string;
  disabled: boolean;
}

export function CalendarDateRangePicker({
  className,
  initialFrom,
  initialTo,
  disabled = false,
}: CalendarDateRangePickerProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initialFromParts = initialFrom.split("-");
  const initialToParts = initialTo.split("-");

  const [open, setOpen] = React.useState(false);

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(
      parseInt(initialFromParts[0]),
      parseInt(initialFromParts[1]) - 1,
      parseInt(initialFromParts[2])
    ),
    to: new Date(
      parseInt(initialToParts[0]),
      parseInt(initialToParts[1]) - 1,
      parseInt(initialToParts[2])
    ),
  });

  // Create Query String
  const createQueryString = React.useCallback(
    (params: Record<string, string | number | null>) => {
      const newSearchParams = new URLSearchParams(searchParams?.toString());

      for (const [key, value] of Object.entries(params)) {
        if (value === null) {
          newSearchParams.delete(key);
        } else {
          newSearchParams.set(key, String(value));
        }
      }

      return newSearchParams.toString();
    },
    [searchParams]
  );

  React.useEffect(() => {
    if (date?.from !== undefined && date?.to !== undefined) {
      router.push(
        `${pathname}?${createQueryString({
          page: 1,
          initialDate: date.from.toISOString(),
          finalDate: date.from.toISOString(),
        })}`
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  const handleSelectDateRange = (date: any) => {
    setDate(date);
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[260px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end">
          <Calendar
            initialFocus
            fromMonth={new Date(2023, 7, 1)}
            toMonth={new Date(2023, 8, 29)}
            toYear={2023}
            fromYear={2023}
            mode="range"
            defaultMonth={date?.from}
            min={2}
            max={7}
            selected={date}
            onSelect={handleSelectDateRange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
