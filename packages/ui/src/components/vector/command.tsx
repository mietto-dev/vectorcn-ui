import { ChevronDown, ChevronUp, Check } from "lucide-react"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@workspace/ui/lib/utils"
import {
  Command as BaseCommand,
  CommandDialog as BaseCommandDialog,
  CommandEmpty as BaseCommandEmpty,
  CommandGroup as BaseCommandGroup,
  CommandItem as BaseCommandItem,
  CommandList as BaseCommandList,
  CommandSeparator as BaseCommandSeparator,
  CommandShortcut as BaseCommandShortcut,
} from "@workspace/ui/components/command"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@workspace/ui/components/dialog"
import { Separator } from "@workspace/ui/components/vector/separator"

function Command({
  className,
  ...props
}: React.ComponentProps<typeof BaseCommand>) {
  return (
    <div className={cn("relative !p-0", className)}>
      <BaseCommand
        className={cn(
          "flex h-full !w-full flex-col overflow-hidden rounded-md bg-popover font-hershey uppercase tracking-wider text-popover-foreground",
          className
        )}
        {...props}
      />

      <div className="absolute -top-1.5 left-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
      <div className="absolute -top-1.5 right-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
      <div className="absolute -bottom-1.5 left-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
      <div className="absolute right-1.5 -bottom-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
      <div className="absolute top-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-0 right-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute right-0 bottom-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-1.5 -left-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-1.5 -right-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-1.5 -left-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute -right-1.5 bottom-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
    </div>
  )
}

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  ...props
}: Omit<React.ComponentProps<typeof Dialog>, "children"> & {
  title?: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <BaseCommandDialog title={title} description={description} {...props}>
      {children}
    </BaseCommandDialog>
  )
}

function CommandInput({
  className,
  placeholder = "Type a command or search...",
}: {
  className?: string
  placeholder?: string
}) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="flex h-10 items-center gap-2 border-b px-3"
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 256 256"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        strokeWidth="0.25"
        aria-label="search"
      >
        <rect x="88" y="56" width="14" height="14" rx="1"></rect>
        <rect x="72" y="72" width="14" height="14" rx="1"></rect>
        <rect x="56" y="88" width="14" height="14" rx="1"></rect>
        <rect x="56" y="104" width="14" height="14" rx="1"></rect>
        <rect x="56" y="120" width="14" height="14" rx="1"></rect>
        <rect x="72" y="136" width="14" height="14" rx="1"></rect>
        <rect x="88" y="152" width="14" height="14" rx="1"></rect>
        <rect x="104" y="152" width="14" height="14" rx="1"></rect>
        <rect x="120" y="152" width="14" height="14" rx="1"></rect>
        <rect x="136" y="136" width="14" height="14" rx="1"></rect>
        <rect x="152" y="120" width="14" height="14" rx="1"></rect>
        <rect x="152" y="104" width="14" height="14" rx="1"></rect>
        <rect x="152" y="88" width="14" height="14" rx="1"></rect>
        <rect x="136" y="72" width="14" height="14" rx="1"></rect>
        <rect x="120" y="56" width="14" height="14" rx="1"></rect>
        <rect x="104" y="56" width="14" height="14" rx="1"></rect>
        <rect x="152" y="152" width="14" height="14" rx="1"></rect>
        <rect x="168" y="168" width="14" height="14" rx="1"></rect>
        <rect x="184" y="184" width="14" height="14" rx="1"></rect>
      </svg>
      <input
        data-slot="command-input"
        placeholder={placeholder}
        className={cn(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
      />
    </div>
  )
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof BaseCommandList>) {
  return (
    <BaseCommandList
      className={cn(
        "max-h-[320px] scroll-py-1 overflow-x-hidden overflow-y-auto font-hershey uppercase tracking-wider",
        className
      )}
      {...props}
    />
  )
}

function CommandEmpty({
  ...props
}: React.ComponentProps<typeof BaseCommandEmpty>) {
  return <BaseCommandEmpty className="py-6 text-center text-sm" {...props} />
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof BaseCommandGroup>) {
  return (
    <BaseCommandGroup
      className={cn(
        "overflow-hidden p-1 font-hershey uppercase tracking-wider text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof BaseCommandSeparator>) {
  return (
    <BaseCommandSeparator
      className={cn(
        "shrink-0 data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:w-full data-[orientation=horizontal]:bg-[linear-gradient(90deg,var(--foreground)_75%,transparent_75%)] data-[orientation=horizontal]:bg-[length:16px_8px] data-[orientation=vertical]:h-full data-[orientation=vertical]:w-0.5 data-[orientation=vertical]:bg-[linear-gradient(0deg,var(--foreground)_75%,transparent_75%)] data-[orientation=vertical]:bg-[length:2px_16px] dark:data-[orientation=horizontal]:bg-[linear-gradient(90deg,var(--ring)_75%,transparent_75%)] dark:data-[orientation=vertical]:bg-[linear-gradient(0deg,var(--ring)_75%,transparent_75%)]",
        "font-hershey uppercase tracking-wider",
        className
      )}
      {...props}
    >
      <Separator />
    </BaseCommandSeparator>
  )
}

function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof BaseCommandItem>) {
  return (
    <BaseCommandItem
      className={cn(
        "rounded-none border-y-4 border-t border-b border-dashed border-ring/0 hover:border-foreground dark:hover:border-ring",
        className
      )}
      {...props}
    />
  )
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <BaseCommandShortcut
      className={cn("font-hershey uppercase tracking-wider", className)}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
