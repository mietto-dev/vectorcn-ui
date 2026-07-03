import { Dialog as SheetPrimitive } from "@base-ui/react/dialog"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@workspace/ui/lib/utils"
import {
  Sheet as BaseSheet,
  SheetClose as BaseSheetClose,
  SheetContent as BaseSheetContent,
  SheetDescription as BaseSheetDescription,
  SheetFooter as BaseSheetFooter,
  SheetHeader as BaseSheetHeader,
  SheetTitle as BaseSheetTitle,
  SheetTrigger as BaseSheetTrigger,
} from "@workspace/ui/components/sheet"

const Sheet = BaseSheet

const SheetTrigger = BaseSheetTrigger

const SheetClose = BaseSheetClose

const SheetDescription = BaseSheetDescription

const SheetFooter = BaseSheetFooter

const SheetHeader = BaseSheetHeader

const SheetTitle = BaseSheetTitle

export const sheetVariants = cva("")
export type BitSheetProps = React.ComponentProps<typeof BaseSheetContent> &
  VariantProps<typeof sheetVariants> & {
    side?: "top" | "right" | "bottom" | "left"
  }

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: BitSheetProps) {
  return (
    <BaseSheetContent side={side} className={cn(className)} {...props}>
      <div className="relative h-full w-full">
        {children}

        {side !== "top" && (
          <div
            className="pointer-events-none absolute top-0 left-0 h-1.5 w-full bg-foreground dark:bg-ring"
            aria-hidden="true"
          />
        )}
        {side !== "bottom" && (
          <div
            className="pointer-events-none absolute bottom-0 h-1.5 w-full bg-foreground dark:bg-ring"
            aria-hidden="true"
          />
        )}
        {side !== "left" && (
          <>
            <div
              className="pointer-events-none absolute top-1 -left-1 h-1/2 w-1.5 bg-foreground dark:bg-ring"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute bottom-1 -left-1 h-1/2 w-1.5 bg-foreground dark:bg-ring"
              aria-hidden="true"
            />
          </>
        )}
        {side !== "right" && (
          <>
            <div
              className="pointer-events-none absolute top-1 -right-1 h-1/2 w-1.5 bg-foreground dark:bg-ring"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-1 bottom-1 h-1/2 w-1.5 bg-foreground dark:bg-ring"
              aria-hidden="true"
            />
          </>
        )}
      </div>
    </BaseSheetContent>
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
}
