import { cn } from "@workspace/ui/lib/utils"
import { Label as BaseLabel } from "@workspace/ui/components/label"

function Label({ className, ...props }: React.ComponentProps<typeof BaseLabel>) {
  return (
    <BaseLabel
      className={cn(
        "font-hershey tracking-wider uppercase",
        className
      )}
      {...props}
    />
  )
}

export { Label }
