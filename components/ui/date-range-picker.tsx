"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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
  const initialFromParts = initialFrom.split("-");
  const initialToParts = initialTo.split("-");

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
            disabled={disabled}
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
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
