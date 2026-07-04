import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@workspace/ui/lib/utils"
import {
  Card as BaseCard,
  CardAction as BaseCardAction,
  CardContent as BaseCardContent,
  CardDescription as BaseCardDescription,
  CardFooter as BaseCardFooter,
  CardHeader as BaseCardHeader,
  CardTitle as BaseCardTitle,
} from "@workspace/ui/components/card"

const cardTitleClasses =
  "font-vector-battle text-xs font-bold uppercase tracking-[3px] leading-7 text-chart-3 [--text-shadow-color:var(--chart-3)] text-shadow-md"

const cardHeaderIconClasses =
  "[&>svg]:!text-chart-3 [&>svg]:!drop-shadow-[0_0_8px_var(--chart-3)] [&_[data-slot=card-action]_svg]:!text-chart-3 [&_[data-slot=card-action]_svg]:!drop-shadow-[0_0_8px_var(--chart-3)]"

const groupedCardHeaderClasses =
  "has-[>svg]:border-b has-[>svg]:border-foreground has-[>svg]:pb-2 has-[>svg]:dark:border-ring has-[>svg]:dark:drop-shadow-lg has-[>svg]:dark:drop-shadow-ring/10"

export const cardVariants = cva("")
export interface BitCardProps
  extends React.ComponentProps<"div">, VariantProps<typeof cardVariants> {
  asChild?: boolean
}

function Card({ ...props }: BitCardProps) {
  const { className } = props

  return (
    <div
      className={cn(
        "relative border border-foreground !p-0 dark:border-ring dark:drop-shadow-lg dark:drop-shadow-ring/10",
        className
      )}
    >
      <BaseCard
        {...props}
        className={cn(
          "!w-full gap-0 rounded-none border-0 py-2 [--card-spacing:--spacing(4)]",
          className
        )}
      />
    </div>
  )
}

function CardHeader({ className, ...props }: BitCardProps) {
  return (
    <BaseCardHeader
      {...props}
      className={cn(
        "uppercase tracking-[3px] leading-7 text-shadow-md font-bold",
        cardHeaderIconClasses,
        groupedCardHeaderClasses,
        className
      )}
    />
  )
}

function CardTitle({ className, ...props }: BitCardProps) {
  return (
    <BaseCardTitle
      {...props}
      className={cn(cardTitleClasses, className)}
    />
  )
}

function CardDescription({ ...props }: BitCardProps) {
  const { className } = props

  return (
    <BaseCardDescription
      className={cn(className)}
      {...props}
    />
  )
}

function CardAction({ ...props }: BitCardProps) {
  const { className } = props

  return (
    <BaseCardAction
      className={cn(className)}
      {...props}
    />
  )
}

function CardContent({ ...props }: BitCardProps) {
  const { className } = props

  return (
    <BaseCardContent
      className={cn(className)}
      {...props}
    />
  )
}

function CardFooter({ ...props }: BitCardProps) {
  const { className } = props

  return (
    <BaseCardFooter
      data-slot="card-footer"
      className={cn(className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
