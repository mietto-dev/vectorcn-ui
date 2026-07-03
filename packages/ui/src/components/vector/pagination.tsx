import { cva, VariantProps } from "class-variance-authority"
import { MoreHorizontal } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"
import {
  Pagination as BasePagination,
  PaginationContent as BasePaginationContent,
  PaginationEllipsis as BasePaginationEllipsis,
  PaginationItem as BasePaginationItem,
  PaginationLink as BasePaginationLink,
} from "@workspace/ui/components/pagination"

import { Button } from "@workspace/ui/components/button"

export const paginationVariants = cva("", {
  variants: {
    variant: {
      default: "text-card-foreground",
      destructive: "text-destructive [&>svg]:text-current",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export type BitPaginationProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & VariantProps<typeof paginationVariants>

const ChevronLeftIcon = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 256 256"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="0.25"
      className="size-7"
      aria-label="chevron-left"
    >
      <rect
        width="14"
        height="14"
        rx="1"
        transform="matrix(-1 0 0 1 128 136)"
      />
      <rect
        width="14"
        height="14"
        rx="1"
        transform="matrix(-1 0 0 1 144 152)"
      />
      <rect width="14" height="14" rx="1" transform="matrix(-1 0 0 1 160 72)" />
      <rect
        width="14"
        height="14"
        rx="1"
        transform="matrix(-1 0 0 1 160 168)"
      />
      <rect
        width="14"
        height="14"
        rx="1"
        transform="matrix(-1 0 0 1 112 120)"
      />
      <rect
        width="14"
        height="14"
        rx="1"
        transform="matrix(-1 0 0 1 128 104)"
      />
      <rect width="14" height="14" rx="1" transform="matrix(-1 0 0 1 144 88)" />
    </svg>
  )
}

const ChevronRightIcon = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 256 256"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="0.25"
      className="size-7"
      aria-label="chevron-right"
    >
      <rect x="128" y="136" width="14" height="14" rx="1" />
      <rect x="112" y="152" width="14" height="14" rx="1" />
      <rect x="96" y="72" width="14" height="14" rx="1" />
      <rect x="96" y="168" width="14" height="14" rx="1" />
      <rect x="144" y="120" width="14" height="14" rx="1" />
      <rect x="128" y="104" width="14" height="14" rx="1" />
      <rect x="112" y="88" width="14" height="14" rx="1" />
    </svg>
  )
}

function Pagination({ ...props }: BitPaginationProps<"nav">) {
  const { variant, className } = props
  return (
    <BasePagination
      {...props}
      className={cn(
        paginationVariants({ variant }),
        className
      )}
    />
  )
}

function PaginationContent({ ...props }: BitPaginationProps<"ul">) {
  const { className } = props
  return (
    <BasePaginationContent
      className={cn(
        "gap-2",
        className
      )}
      {...props}
    />
  )
}

function PaginationItem({ ...props }: BitPaginationProps<"li">) {
  const { className } = props
  return (
    <BasePaginationItem
      className={cn(className)}
      {...props}
    />
  )
}

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  BitPaginationProps<"a">

function PaginationLink({ ...props }: PaginationLinkProps) {
  const { children, isActive, className } = props
  return (
    <BasePaginationLink
      className={cn(
        className,
        "group relative",
        "bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent",
        "rounded-none border-y-4 border-dotted border-transparent",
        "dark:hover:border-ring dark:focus:border-ring",
        "hover:border-foreground focus:border-foreground",
        "active:border-transparent",
        "aria-[current=page]:border-none data-[active=true]:border-none"
      )}
      {...props}
    >
      {children}

      {isActive && (
        <div
          className="pointer-events-none absolute inset-0 h-full w-full"
          style={{ zIndex: 10 }}
        >
          <div className="pointer-events-none absolute top-0 left-0 h-1.5 w-full bg-foreground dark:bg-ring" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-1.5 w-full bg-foreground dark:bg-ring" />
          <div className="pointer-events-none absolute top-1 -left-1 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
          <div className="pointer-events-none absolute bottom-1 -left-1 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
          <div className="pointer-events-none absolute top-1 -right-1 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
          <div className="pointer-events-none absolute -right-1 bottom-1 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
        </div>
      )}
    </BasePaginationLink>
  )
}

function PaginationPrevious({
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  const { className } = props
  return (
    <PaginationLink
      className={cn(
        "group relative flex w-full flex-row rounded-none border-y-4 border-dotted border-transparent bg-transparent text-sm hover:border-foreground hover:bg-transparent focus:border-foreground focus:bg-transparent active:border-transparent active:bg-transparent aria-[current=page]:border-none data-[active=true]:border-none dark:hover:border-ring dark:focus:border-ring",
        className
      )}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  )
}

function PaginationNext({
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  const { className } = props
  return (
    <PaginationLink
      className={cn(
        "group relative flex w-full flex-row rounded-none border-y-4 border-dotted border-transparent bg-transparent text-sm hover:border-foreground hover:bg-transparent focus:border-foreground focus:bg-transparent active:border-transparent active:bg-transparent aria-[current=page]:border-none data-[active=true]:border-none dark:hover:border-ring dark:focus:border-ring",
        className
      )}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  )
}

function PaginationEllipsis({ ...props }: BitPaginationProps<"span">) {
  const { className } = props
  return (
    <BasePaginationEllipsis
      className={cn(className)}
      {...props}
    >
      <MoreHorizontal className={cn("size-7")} />
      <span className="sr-only">More pages</span>
    </BasePaginationEllipsis>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
