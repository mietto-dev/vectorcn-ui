import { cva, VariantProps } from "class-variance-authority"
import { DayPicker } from "react-day-picker"

import { simplex } from "@/config/fonts"
import { cn } from "@/lib/utils"
import {
  defaultClassNames,
  Calendar as ShadcnCalendar,
} from "@/components/ui/calendar"
import { Card } from "@/components/ui/vector/card"

import { buttonVariants } from "./button"

export const calendarVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: simplex.className,
    },
  },
  defaultVariants: {
    font: "retro",
  },
})

export type CalendarProps = React.ComponentProps<typeof DayPicker> &
  VariantProps<typeof calendarVariants>

function Calendar({ className, classNames, font, ...props }: CalendarProps) {
  return (
    <Card className="py-3 bg">
      <ShadcnCalendar
        className={cn(
          calendarVariants({
            className,
            font,
          })
        )}
        classNames={{
          months: cn("justify-center uppercase"),
          table: cn("justify-self-center"),
          nav_button: cn(
            buttonVariants({ variant: "outline" }),
            "size-7 bg-transparent p-0 flex items-center justify-center opacity-50 hover:opacity-100 border-2 border-foreground dark:border-ring"
          ),
          day: cn(
            buttonVariants({ variant: "ghost" }),
            "size-9 p-0 font-normal aria-selected:opacity-100"
          ),
          caption_label: "text-sm font-semibold",
          head_cell: cn(
            defaultClassNames.head_cell,
            "font-semibold bg-muted-foreground/10 p-0.5 pt-1"
          ),
          ...classNames,
        }}
        components={{
          IconLeft: ({ className, ...props }) => (
            <svg
              viewBox="0 0 256 256"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              strokeWidth="0.25"
              color=""
              className={cn("size-4 shrink-0", className)}
              aria-label="chevron-left"
              {...props}
            >
              <rect
                width="14"
                height="14"
                rx="1"
                transform="matrix(-1 0 0 1 128 136)"
              ></rect>
              <rect
                width="14"
                height="14"
                rx="1"
                transform="matrix(-1 0 0 1 144 152)"
              ></rect>
              <rect
                width="14"
                height="14"
                rx="1"
                transform="matrix(-1 0 0 1 160 72)"
              ></rect>
              <rect
                width="14"
                height="14"
                rx="1"
                transform="matrix(-1 0 0 1 160 168)"
              ></rect>
              <rect
                width="14"
                height="14"
                rx="1"
                transform="matrix(-1 0 0 1 112 120)"
              ></rect>
              <rect
                width="14"
                height="14"
                rx="1"
                transform="matrix(-1 0 0 1 128 104)"
              ></rect>
              <rect
                width="14"
                height="14"
                rx="1"
                transform="matrix(-1 0 0 1 144 88)"
              ></rect>
            </svg>
          ),
          IconRight: ({ className, ...props }) => (
            <svg
              viewBox="0 0 256 256"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              strokeWidth="0.25"
              color=""
              className={cn("size-4 shrink-0", className)}
              aria-label="chevron-right"
              {...props}
            >
              <rect x="128" y="136" width="14" height="14" rx="1"></rect>
              <rect x="112" y="152" width="14" height="14" rx="1"></rect>
              <rect x="96" y="72" width="14" height="14" rx="1"></rect>
              <rect x="96" y="168" width="14" height="14" rx="1"></rect>
              <rect x="144" y="120" width="14" height="14" rx="1"></rect>
              <rect x="128" y="104" width="14" height="14" rx="1"></rect>
              <rect x="112" y="88" width="14" height="14" rx="1"></rect>
            </svg>
          ),
        }}
        {...props}
      />
    </Card>
  )
}

export { Calendar }
