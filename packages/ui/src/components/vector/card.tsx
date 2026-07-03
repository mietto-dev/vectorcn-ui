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
          "!w-full rounded-none border-0",
          className
        )}
      />
    </div>
  )
}

function CardHeader({ ...props }: BitCardProps) {
  const { className } = props

  return (
    <BaseCardHeader
      className={cn("uppercase tracking-[3px] leading-7 text-shadow-md font-bold", className)}
      {...props}
    />
  )
}

function CardTitle({ ...props }: BitCardProps) {
  const { className } = props

  return (
    <BaseCardTitle
      className={cn("font-vector-battle font-bold text-accent-foreground text-xs", className)}
      {...props}
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
