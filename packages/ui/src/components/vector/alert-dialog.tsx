import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@workspace/ui/lib/utils"
import {
  AlertDialog as BaseAlertDialog,
  AlertDialogAction as BaseAlertDialogAction,
  AlertDialogCancel as BaseAlertDialogCancel,
  AlertDialogContent as BaseAlertDialogContent,
  AlertDialogDescription as BaseAlertDialogDescription,
  AlertDialogFooter as BaseAlertDialogFooter,
  AlertDialogHeader as BaseAlertDialogHeader,
  AlertDialogOverlay as BaseAlertDialogOverlay,
  AlertDialogPortal as BaseAlertDialogPortal,
  AlertDialogTitle as BaseAlertDialogTitle,
  AlertDialogTrigger as BaseAlertDialogTrigger,
} from "@workspace/ui/components/alert-dialog"

export const alertDialogVariants = cva("")

export interface BitAlertDialogProps
  extends
    AlertDialogPrimitive.Root.Props,
    VariantProps<typeof alertDialogVariants> {}

function AlertDialog({ ...props }: BitAlertDialogProps) {
  return <BaseAlertDialog {...props} />
}

function AlertDialogTrigger({
  className,
  ...props
}: AlertDialogPrimitive.Trigger.Props) {
  return <BaseAlertDialogTrigger className={cn(className)} {...props} />
}

function AlertDialogPortal({ ...props }: AlertDialogPrimitive.Portal.Props) {
  return <BaseAlertDialogPortal {...props} />
}

function AlertDialogOverlay({
  className,
  ...props
}: AlertDialogPrimitive.Backdrop.Props) {
  return <BaseAlertDialogOverlay className={cn(className)} {...props} />
}

interface BitAlertDialogContentProps
  extends
    AlertDialogPrimitive.Popup.Props,
    VariantProps<typeof alertDialogVariants> {}

function AlertDialogContent({
  className,
  children,
  ...props
}: BitAlertDialogContentProps) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <BaseAlertDialogContent
        className={cn(
          "rounded-none border border-foreground dark:border-ring",
          className
        )}
        {...props}
      >
        {children}
      </BaseAlertDialogContent>
    </AlertDialogPortal>
  )
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <BaseAlertDialogHeader className={cn(className)} {...props} />
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <BaseAlertDialogFooter
      className={cn("flex flex-col-reverse gap-4 sm:flex-row", className)}
      {...props}
    />
  )
}

function AlertDialogTitle({
  className,
  ...props
}: AlertDialogPrimitive.Title.Props) {
  return <BaseAlertDialogTitle className={cn(className)} {...props} />
}

function AlertDialogDescription({
  className,
  ...props
}: AlertDialogPrimitive.Description.Props) {
  return <BaseAlertDialogDescription className={cn(className)} {...props} />
}

function AlertDialogAction({
  className,
  ...props
}: React.ComponentProps<typeof BaseAlertDialogAction>) {
  return (
    <BaseAlertDialogAction
      className={cn(
        "relative rounded-none bg-primary transition-transform active:translate-y-1",
        "border-none ring-0",
        className
      )}
      {...props}
    >
      {props.children}
      <div className="absolute -top-1.5 left-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
      <div className="absolute -top-1.5 right-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
      <div className="absolute -bottom-1.5 left-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
      <div className="absolute right-1.5 -bottom-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
      <div className="absolute top-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-0 right-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute right-0 bottom-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-1.5 -left-1.5 h-2/3 w-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-1.5 -right-1.5 h-2/3 w-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-0 left-0 h-1.5 w-full bg-foreground/20" />
      <div className="absolute top-1.5 left-0 h-1.5 w-3 bg-foreground/20" />
      <div className="absolute bottom-0 left-0 h-1.5 w-full bg-foreground/20" />
      <div className="absolute right-0 bottom-1.5 h-1.5 w-3 bg-foreground/20" />
    </BaseAlertDialogAction>
  )
}

function AlertDialogCancel({
  className,
  ...props
}: AlertDialogPrimitive.Close.Props) {
  return (
    <BaseAlertDialogCancel
      className={cn(
        "relative rounded-none bg-background transition-transform active:translate-y-1",
        "border-none ring-0",
        className
      )}
      {...props}
    >
      {props.children}
      <div className="absolute -top-1.5 left-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
      <div className="absolute -top-1.5 right-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
      <div className="absolute -bottom-1.5 left-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
      <div className="absolute right-1.5 -bottom-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
      <div className="absolute top-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-0 right-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute right-0 bottom-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-1.5 -left-1.5 h-2/3 w-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-1.5 -right-1.5 h-2/3 w-1.5 bg-foreground dark:bg-ring" />
    </BaseAlertDialogCancel>
  )
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
