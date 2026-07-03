import { DayPicker } from "react-day-picker"

import { cn } from "@workspace/ui/lib/utils"
import { Calendar as BaseCalendar } from "@workspace/ui/components/calendar"
import { buttonVariants } from "@workspace/ui/components/vector/button"
import { Card } from "@workspace/ui/components/vector/card"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({ className, classNames, ...props }: CalendarProps) {
  return (
    <Card className="bg py-3 font-simplex">
      <BaseCalendar
        className={cn(className)}
        classNames={{
          months: cn("justify-center uppercase font-simplex"),
          month_grid: cn("justify-self-center"),
          button_previous: cn(
            buttonVariants({ variant: "outline" }),
            "size-7 bg-transparent p-0 flex items-center justify-center opacity-50 hover:opacity-100 border-2 border-foreground dark:border-ring"
          ),
          button_next: cn(
            buttonVariants({ variant: "outline" }),
            "size-7 bg-transparent p-0 flex items-center justify-center opacity-50 hover:opacity-100 border-2 border-foreground dark:border-ring"
          ),
          day_button: cn(
            buttonVariants({ variant: "ghost" }),
            "size-9 p-0 font-normal aria-selected:opacity-100 font-simplex"
          ),
          caption_label: "text-sm font-semibold uppercase tracking-wider",
          weekday: cn(
            "bg-muted-foreground/10 p-0.5 pt-1 text-center text-xs font-semibold uppercase tracking-wider"
          ),
          ...classNames,
        }}
        components={{
          Chevron: ({ className, orientation, ...props }) => {
            const isLeft = orientation === "left"
            return (
              <svg
                viewBox="0 0 256 256"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="0.25"
                className={cn("size-4 shrink-0", className)}
                aria-label={isLeft ? "chevron-left" : "chevron-right"}
                {...props}
              >
                {isLeft ? (
                  <>
                    <rect
                      width="14"
                      height="14"
                      rx="1"
                      transform="matrix(-1 0 0 1 128 136)"
                    />
                    <rect
                      width="14"
                      height="14"
                      rx="1"
                      transform="matrix(-1 0 0 1 144 152)"
                    />
                    <rect
                      width="14"
                      height="14"
                      rx="1"
                      transform="matrix(-1 0 0 1 160 72)"
                    />
                    <rect
                      width="14"
                      height="14"
                      rx="1"
                      transform="matrix(-1 0 0 1 160 168)"
                    />
                    <rect
                      width="14"
                      height="14"
                      rx="1"
                      transform="matrix(-1 0 0 1 112 120)"
                    />
                    <rect
                      width="14"
                      height="14"
                      rx="1"
                      transform="matrix(-1 0 0 1 128 104)"
                    />
                    <rect
                      width="14"
                      height="14"
                      rx="1"
                      transform="matrix(-1 0 0 1 144 88)"
                    />
                  </>
                ) : (
                  <>
                    <rect x="128" y="136" width="14" height="14" rx="1" />
                    <rect x="112" y="152" width="14" height="14" rx="1" />
                    <rect x="96" y="72" width="14" height="14" rx="1" />
                    <rect x="96" y="168" width="14" height="14" rx="1" />
                    <rect x="144" y="120" width="14" height="14" rx="1" />
                    <rect x="128" y="104" width="14" height="14" rx="1" />
                    <rect x="112" y="88" width="14" height="14" rx="1" />
                  </>
                )}
              </svg>
            )
          },
        }}
        {...props}
      />
    </Card>
  )
}

export { Calendar }
