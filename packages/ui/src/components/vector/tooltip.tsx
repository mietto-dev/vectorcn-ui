import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip"

import { cn } from "@workspace/ui/lib/utils"
import {
  Tooltip as BaseTooltip,
  TooltipContent as BaseTooltipContent,
  TooltipProvider as BaseTooltipProvider,
  TooltipTrigger as BaseTooltipTrigger,
} from "@workspace/ui/components/tooltip"

function TooltipContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseTooltipContent>) {
  return (
    <div className={cn("relative inline-flex", className)}>
      <BaseTooltipContent {...props} className={cn("rounded-none")}>
        {children}
        <div
          className="absolute top-1.5 bottom-1.5 -left-1.5 h-1/2 w-1.5 bg-primary"
          aria-hidden="true"
        />
        <div
          className="absolute top-1.5 -right-1.5 bottom-1.5 h-1/2 w-1.5 bg-primary"
          aria-hidden="true"
        />
      </BaseTooltipContent>
    </div>
  )
}

export interface BitTooltipProps
  extends TooltipPrimitive.Root.Props {}

function Tooltip({ children, ...props }: BitTooltipProps) {
  return <BaseTooltip {...props}>{children}</BaseTooltip>
}

export interface BitTooltipProviderProps
  extends TooltipPrimitive.Provider.Props {
  delayDuration?: number
}

function TooltipProvider({
  children,
  delay = 0,
  ...props
}: BitTooltipProviderProps) {
  return (
    <BaseTooltipProvider delay={delay} {...props}>
      {children}
    </BaseTooltipProvider>
  )
}

function TooltipTrigger({
  children,
  ...props
}: TooltipPrimitive.Trigger.Props) {
  return <BaseTooltipTrigger {...props}>{children}</BaseTooltipTrigger>
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }
