"use client"

import { useState } from "react"

import { Calendar } from "@workspace/ui/components/calendar"

export function CalendarExample() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <Calendar
      className="h-max"
      mode="single"
      selected={date}
      onSelect={setDate}
    />
  )
}
