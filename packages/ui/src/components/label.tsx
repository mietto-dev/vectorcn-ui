import { cn } from "@workspace/ui/lib/utils"

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn("tracking-wider uppercase", className)}
      {...props}
    />
  )
}

export { Label }
