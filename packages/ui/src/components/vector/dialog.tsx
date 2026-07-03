import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@workspace/ui/lib/utils"
import {
  Dialog as BaseDialog,
  DialogClose as BaseDialogClose,
  DialogContent as BaseDialogContent,
  DialogDescription as BaseDialogDescription,
  DialogFooter as BaseDialogFooter,
  DialogHeader as BaseDialogHeader,
  DialogTitle as BaseDialogTitle,
  DialogTrigger as BaseDialogTrigger,
} from "@workspace/ui/components/dialog"

const Dialog = BaseDialog

const DialogTrigger = BaseDialogTrigger

const DialogHeader = BaseDialogHeader

const DialogDescription = BaseDialogDescription

const DialogClose = BaseDialogClose

const DialogFooter = BaseDialogFooter

export interface BitDialogProps
  extends
    React.ComponentProps<"div">,
    VariantProps<typeof dialogContentVariants> {}

function DialogTitle({ ...props }: BitDialogProps) {
  const { className } = props
  return (
    <BaseDialogTitle
      className={cn(className)}
      {...props}
    />
  )
}

export const dialogContentVariants = cva("")
function DialogContent({
  className,
  children,
  ...props
}: BitDialogProps) {
  return (
    <BaseDialogContent
      className={cn(
        "rounded-none border-none bg-card",
        className
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
    </BaseDialogContent>
  )
}

export {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogFooter,
  DialogDescription,
  DialogTitle,
  DialogContent,
  DialogClose,
}
