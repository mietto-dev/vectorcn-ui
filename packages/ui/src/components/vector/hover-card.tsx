import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@workspace/ui/lib/utils"
import {
  HoverCard as BaseHoverCard,
  HoverCardContent as BaseHoverCardContent,
  HoverCardTrigger as BaseHoverCardTrigger,
} from "@workspace/ui/components/hover-card"

export const hoverCardVariants = cva("")
export interface BitHoverCardProps
  extends
    React.ComponentProps<typeof BaseHoverCardContent>,
    VariantProps<typeof hoverCardVariants> {}

function HoverCard({ ...props }: PreviewCardPrimitive.Root.Props) {
  return <BaseHoverCard {...props} />
}

function HoverCardTrigger({
  className,
  ...props
}: PreviewCardPrimitive.Trigger.Props) {
  return <BaseHoverCardTrigger className={cn(className)} {...props} />
}

function HoverCardContent({ children,
  className, ...props }: BitHoverCardProps) {
  return (
    <BaseHoverCardContent
      className={cn(
        "relative",
        hoverCardVariants({
          })
      )}
      {...props}
    >
      {children}

      <div
        className="pointer-events-none absolute inset-0 -mx-1.5 border-x-6 border-foreground dark:border-ring"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -my-1.5 border-y-6 border-foreground dark:border-ring"
        aria-hidden="true"
      />
    </BaseHoverCardContent>
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
