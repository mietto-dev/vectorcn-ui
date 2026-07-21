import { Switch as SwitchPrimitive } from "@base-ui/react/switch"

import { cn } from "@workspace/ui/lib/utils"

function Switch({ className, ...props }: SwitchPrimitive.Root.Props) {
  return (
    <div className={cn("relative inline-flex", className)}>
      <SwitchPrimitive.Root
        data-slot="switch"
        className={cn(
          "peer group/switch relative inline-flex h-5 w-8 shrink-0 items-center rounded-xs border-2 transition-all outline-none data-checked:border-primary data-checked:bg-primary data-unchecked:border-transparent data-unchecked:bg-input dark:data-unchecked:bg-input/80 data-disabled:cursor-not-allowed data-disabled:opacity-50",
          className
        )}
        {...props}
      >
        <SwitchPrimitive.Thumb
          data-slot="switch-thumb"
          className="pointer-events-none block size-4 rounded-xs bg-background shadow-sm transition-transform data-checked:translate-x-[calc(100%-4px)] data-unchecked:translate-x-0 rtl:data-checked:-translate-x-[calc(100%-4px)] rtl:data-unchecked:-translate-x-0 dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground"
        />
      </SwitchPrimitive.Root>

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
