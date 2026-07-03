import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible"

import { cn } from "@workspace/ui/lib/utils"
import {
  Collapsible as BaseCollapsible,
  CollapsibleContent as BaseCollapsibleContent,
  CollapsibleTrigger as BaseCollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

function Collapsible({ children, ...props }: CollapsiblePrimitive.Root.Props) {
  const { className } = props

  return (
    <div className={cn("relative", className)}>
      <BaseCollapsible {...props}>
        {children}
      </BaseCollapsible>
    </div>
  )
}

function CollapsibleTrigger({
  children,
  ...props
}: CollapsiblePrimitive.Trigger.Props) {
  const { className } = props
  return (
    <BaseCollapsibleTrigger
      className={cn(className)}
      {...props}
    >
      {children}
    </BaseCollapsibleTrigger>
  )
}

function CollapsibleContent({
  children,
  ...props
}: CollapsiblePrimitive.Panel.Props) {
  const { className } = props
  return (
    <BaseCollapsibleContent
      className={cn(className)}
      {...props}
    >
      {children}
    </BaseCollapsibleContent>
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
