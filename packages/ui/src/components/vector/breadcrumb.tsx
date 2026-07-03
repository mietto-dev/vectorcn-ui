import { Slot } from "@radix-ui/react-slot"
import { cva, VariantProps } from "class-variance-authority"
import { MoreHorizontal } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"
import {
  Breadcrumb as BaseBreadcrumb,
  BreadcrumbEllipsis as BaseBreadcrumbEllipsis,
  BreadcrumbItem as BaseBreadcrumbItem,
  BreadcrumbList as BaseBreadcrumbList,
  BreadcrumbPage as BaseBreadcrumbPage,
  BreadcrumbSeparator as BaseBreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"

export const breadcrumbVariants = cva("", {
  variants: {
    variant: {
      default: "text-card-foreground",
      destructive:
        "text-destructive *:data-[slot=alert-description]:text-destructive/90 [&>svg]:text-current",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

interface BitBreadcrumbNavigationProps
  extends
    React.ComponentProps<"nav">,
    VariantProps<typeof breadcrumbVariants> {}

interface BitBreadcrumbOrderedListProps
  extends React.ComponentProps<"ol">, VariantProps<typeof breadcrumbVariants> {}

interface BitBreadcrumbSpanProps
  extends
    React.ComponentProps<"span">,
    VariantProps<typeof breadcrumbVariants> {}

interface BitBreadcrumbListItemProps
  extends React.ComponentProps<"li">, VariantProps<typeof breadcrumbVariants> {}

interface BitBreadcrumbLinkProps
  extends React.ComponentProps<"a">, VariantProps<typeof breadcrumbVariants> {}

const ChevronRight = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 256 256"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="0.25"
      color=""
      className="size-7"
      aria-label="chevron-right"
    >
      <rect x="128" y="136" width="14" height="14" rx="1"></rect>
      <rect x="112" y="152" width="14" height="14" rx="1"></rect>
      <rect x="96" y="72" width="14" height="14" rx="1"></rect>
      <rect x="96" y="168" width="14" height="14" rx="1"></rect>
      <rect x="144" y="120" width="14" height="14" rx="1"></rect>
      <rect x="128" y="104" width="14" height="14" rx="1"></rect>
      <rect x="112" y="88" width="14" height="14" rx="1"></rect>
    </svg>
  )
}

function Breadcrumb({ children, ...props }: BitBreadcrumbNavigationProps) {
  const { variant, className } = props

  return (
    <div
      className={cn(
        "mb-4 flex items-center space-x-1 text-sm leading-none text-muted-foreground",
        className
      )}
    >
      <BaseBreadcrumb
        className={cn(
          "relative rounded-none border-none bg-background",
          breadcrumbVariants({ variant }),
          className
        )}
      >
        {children}
      </BaseBreadcrumb>
    </div>
  )
}

function BreadcrumbList({ ...props }: BitBreadcrumbOrderedListProps) {
  const { className } = props

  return (
    <BaseBreadcrumbList
      className={cn(className)}
      {...props}
    />
  )
}

function BreadcrumbItem({ ...props }: BitBreadcrumbListItemProps) {
  const { className } = props

  return (
    <BaseBreadcrumbItem
      className={cn(className)}
      {...props}
    />
  )
}

function BreadcrumbLink({
  asChild,
  ...props
}: BitBreadcrumbLinkProps & {
  asChild?: boolean
}) {
  const { className } = props

  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn(className)}
      {...props}
    />
  )
}

function BreadcrumbPage({ ...props }: BitBreadcrumbSpanProps) {
  const { className } = props

  return (
    <BaseBreadcrumbPage
      className={cn(className)}
      {...props}
    />
  )
}

function BreadcrumbSeparator({ ...props }: BitBreadcrumbListItemProps) {
  const { children, className } = props

  return (
    <BaseBreadcrumbSeparator
      className={cn(
        className,
        "[&>svg]:size-7"
      )}
      {...props}
    >
      {children ?? <ChevronRight />}
    </BaseBreadcrumbSeparator>
  )
}

function BreadcrumbEllipsis({ ...props }: BitBreadcrumbSpanProps) {
  const { className } = props

  return (
    <BaseBreadcrumbEllipsis
      className={cn(className)}
      {...props}
    >
      <MoreHorizontal className={cn("size-7")} />
      <span className="sr-only">More</span>
    </BaseBreadcrumbEllipsis>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
