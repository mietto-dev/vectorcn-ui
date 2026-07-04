import { DayPicker } from "react-day-picker"

import { cn } from "@workspace/ui/lib/utils"
import { Calendar as BaseCalendar } from "@workspace/ui/components/calendar"
import { buttonVariants } from "@workspace/ui/components/vector/button"
import { Card } from "@workspace/ui/components/vector/card"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({ className, classNames, ...props }: CalendarProps) {
  return (
    <Card className="bg overflow-hidden py-3 [--cell-radius:0px] [--cell-size:--spacing(8)]">
      <BaseCalendar
        className={cn(
          "max-w-full bg-transparent p-3 font-simplex text-background dark:text-foreground",
          className
        )}
        classNames={{
          months: "relative flex w-full justify-center",
          month: "mx-auto w-fit",
          nav: cn(
            "absolute inset-x-0 top-0 z-10 flex w-full items-center justify-between gap-2"
          ),
          button_previous: cn(
            buttonVariants({ variant: "outline", size: "icon" }),
            "size-8 rounded-none border-primary/80 bg-background/5 text-success shadow-none [text-shadow:none] hover:border-primary hover:bg-primary/15 hover:text-success dark:bg-background/10"
          ),
          button_next: cn(
            buttonVariants({ variant: "outline", size: "icon" }),
            "size-8 rounded-none border-primary/80 bg-background/5 text-success shadow-none [text-shadow:none] hover:border-primary hover:bg-primary/15 hover:text-success dark:bg-background/10"
          ),
          day_button: cn(
            "flex size-8 min-w-8 items-center justify-center rounded-none border border-transparent bg-transparent p-0 text-sm font-semibold leading-none text-background transition-colors outline-none hover:bg-background/10 hover:text-background focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40 aria-selected:border-primary aria-selected:bg-primary aria-selected:text-primary-foreground aria-selected:shadow-none aria-selected:hover:bg-primary aria-selected:hover:text-primary-foreground data-[selected=true]:border-primary data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground data-[selected=true]:shadow-none data-[selected=true]:hover:bg-primary data-[selected=true]:hover:text-primary-foreground data-[today=true]:border-primary/60 data-[today=true]:text-primary data-[outside=true]:text-background/55 disabled:cursor-not-allowed disabled:opacity-40 dark:text-foreground dark:hover:bg-background/10 dark:hover:text-foreground dark:data-[outside=true]:text-foreground/55"
          ),
          month_caption: "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          caption_label:
            "text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-background [--text-shadow-color:var(--background)] text-shadow-md dark:text-foreground dark:[--text-shadow-color:var(--foreground)]",
          month_grid: "mx-auto w-fit border-collapse",
          weekdays:
            "mx-auto mb-2 flex w-fit gap-1 rounded-none border border-background/15 bg-background/10 px-1 py-1 dark:bg-background/10",
          weekday:
            "flex size-8 items-center justify-center rounded-none p-0 text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-background/65 dark:text-foreground/65",
          week: "mx-auto mt-2 flex w-fit justify-center gap-1",
          day: "relative size-8 p-0",
          ...classNames,
        }}
        components={{
          Chevron: ({ className, orientation, ...props }) => {
            const isLeft = orientation === "left"
            const isRight = orientation === "right"

            const chevronClassName = cn("size-5 shrink-0", className)

            if (!isLeft && !isRight) {
              return (
                <svg
                  viewBox="0 0 256 256"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  strokeWidth="0.25"
                  className={cn(chevronClassName, "rotate-90")}
                  aria-label="chevron-down"
                  {...props}
                >
                  <rect x="128" y="136" width="14" height="14" rx="1" />
                  <rect x="112" y="152" width="14" height="14" rx="1" />
                  <rect x="96" y="72" width="14" height="14" rx="1" />
                  <rect x="96" y="168" width="14" height="14" rx="1" />
                  <rect x="144" y="120" width="14" height="14" rx="1" />
                  <rect x="128" y="104" width="14" height="14" rx="1" />
                  <rect x="112" y="88" width="14" height="14" rx="1" />
                </svg>
              )
            }

            return (
              <svg
                viewBox="0 0 256 256"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="0.25"
                className={chevronClassName}
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
