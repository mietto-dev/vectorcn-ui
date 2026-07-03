import { cn } from "@workspace/ui/lib/utils"
import { Progress as BaseProgress } from "@workspace/ui/components/progress"

interface BitProgressProps
  extends
    Omit<React.ComponentProps<typeof BaseProgress>, "value"> {
  className?: string
  value?: number | null
}

function Progress({ className, value, ...props }: BitProgressProps) {
  const filledSquares = Math.round(((value || 0) / 100) * 20)

  return (
    <div className={cn("relative w-full", className)}>
      <BaseProgress
        className={cn(
          "relative h-2 w-full overflow-hidden bg-primary/20"
        )}
        value={value ?? null}
        {...props}
      >
        <div className="flex h-full w-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "mx-[1px] size-2 w-full",
                i < filledSquares ? "bg-primary" : "bg-transparent"
              )}
            />
          ))}
        </div>
      </BaseProgress>

      <div
        className="pointer-events-none absolute inset-0 -my-1 border-y-4 border-foreground dark:border-ring"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -mx-1 border-x-4 border-foreground dark:border-ring"
        aria-hidden="true"
      />
    </div>
  )
}

export { Progress }
