import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@workspace/ui/lib/utils"
import {
  Table as BaseTable,
  TableBody as BaseTableBody,
  TableCaption as BaseTableCaption,
  TableCell as BaseTableCell,
  TableFooter as BaseTableFooter,
  TableHead as BaseTableHead,
  TableHeader as BaseTableHeader,
  TableRow as BaseTableRow,
} from "@workspace/ui/components/table"

export const tableVariants = cva("", {
  variants: {
    variant: {
      default: "border-y-6 border-foreground p-4 py-2.5 dark:border-ring",
      borderless: "",
    },
    },
  defaultVariants: {
    variant: "default",
  },
})

function Table({
  className,
  variant,
  ...props
}: React.ComponentProps<"table"> & {
  variant?: VariantProps<typeof tableVariants>["variant"]
}) {
  return (
    <div
      className={cn(
        "relative flex w-fit justify-center",
        tableVariants({ variant })
      )}
    >
      <BaseTable className={className} {...props} />

      {variant !== "borderless" && (
        <div
          className="pointer-events-none absolute inset-0 -mx-1.5 border-x-6 border-foreground dark:border-ring"
          aria-hidden="true"
        />
      )}
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return <BaseTableHeader className={cn(className)} {...props} />
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return <BaseTableBody className={cn(className)} {...props} />
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return <BaseTableFooter className={cn(className)} {...props} />
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <BaseTableRow
      className={cn(
        className,
        "border-dashed border-foreground dark:border-ring"
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return <BaseTableHead className={cn(className)} {...props} />
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return <BaseTableCell className={cn(className)} {...props} />
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return <BaseTableCaption className={cn(className)} {...props} />
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
