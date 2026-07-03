import { Switch as SwitchPrimitive } from "@base-ui/react/switch"

import { cn } from "@workspace/ui/lib/utils"
import { Switch as BaseSwitch } from "@workspace/ui/components/switch"

function Switch({ className, ...props }: SwitchPrimitive.Root.Props) {
  return (
    <div className={cn("relative inline-flex", className)}>
      <BaseSwitch
        {...props}
        className={cn(
          "rounded-xs data-checked:bg-primary data-unchecked:bg-input dark:data-unchecked:bg-input/80",
          className
        )}
      />

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

export { Switch }
