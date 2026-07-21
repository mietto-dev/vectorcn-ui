import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@workspace/ui/lib/utils"

const cardTitleClasses =
  "font-vector-battle text-xs font-bold uppercase tracking-[3px] leading-7 text-chart-3 [--text-shadow-color:var(--chart-3)] text-shadow-md"

const cardHeaderIconClasses =
  "[&>svg]:!text-chart-3 [&>svg]:!drop-shadow-[0_0_8px_var(--chart-3)] [&_[data-slot=card-action]_svg]:!text-chart-3 [&_[data-slot=card-action]_svg]:!drop-shadow-[0_0_8px_var(--chart-3)]"

const groupedCardHeaderClasses =
  "has-[>svg]:border-b has-[>svg]:border-foreground has-[>svg]:pb-2 has-[>svg]:dark:border-ring has-[>svg]:dark:drop-shadow-lg has-[>svg]:dark:drop-shadow-ring/10"

export const cardVariants = cva("")

export interface BitCardProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof cardVariants> {
}

function Card({ className, ...props }: BitCardProps) {
  return (
    <div
      className={cn(
        "relative border border-foreground !p-0 dark:border-ring dark:drop-shadow-lg dark:drop-shadow-ring/10",
        className
      )}
    >
      <div
        data-slot="card"
        className={cn(
          "!w-full gap-0 rounded-none border-0 py-2 [--card-spacing:--spacing(4)]",
          className
        )}
        {...props}
      />
    </div>
  )
}

function CardHeader({ className, ...props }: BitCardProps) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "uppercase tracking-[3px] leading-7 text-shadow-md font-bold",
        cardHeaderIconClasses,
        groupedCardHeaderClasses,
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: BitCardProps) {
  return (
    <div
      data-slot="card-title"
      className={cn(cardTitleClasses, className)}
      {...props}
    />
  )
}

function CardDescription({
  className,
  ...props
}: BitCardProps) {
  return <div data-slot="card-description" className={cn(className)} {...props} />
}

function CardAction({ className, ...props }: BitCardProps) {
  return <div data-slot="card-action" className={cn(className)} {...props} />
}

function CardContent({ className, ...props }: BitCardProps) {
  return <div data-slot="card-content" className={cn(className)} {...props} />
}

function CardFooter({ className, ...props }: BitCardProps) {
  return <div data-slot="card-footer" className={cn(className)} {...props} />
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
