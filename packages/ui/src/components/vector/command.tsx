import { Combobox } from "@base-ui/react/combobox"
import { SearchIcon } from "lucide-react"

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
import { Dialog } from "@workspace/ui/components/dialog"
import { Separator } from "@workspace/ui/components/vector/separator"

const commandInputClasses =
  "h-10 w-full min-w-0 rounded-none border-0 bg-transparent py-2 text-base text-foreground [--text-shadow-color:var(--foreground)] text-shadow-md outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"

const commandInputGroupClasses =
  "flex h-10 w-full items-center gap-2 border border-accent-foreground/80 bg-accent-foreground/5 px-3 shadow-[0_0_3px_var(--accent-foreground)] transition-[box-shadow,border-color] duration-200 focus-within:border-accent-foreground focus-within:shadow-[0_0_3px_var(--accent-foreground)]"

function Command({
  className,
  ...props
}: React.ComponentProps<typeof BaseCommand>) {
  return (
    <div
      className={cn(
        "relative border border-foreground !p-0 dark:border-ring dark:drop-shadow-lg dark:drop-shadow-ring/10",
        className
      )}
    >
      <BaseCommand
        className={cn(
          "flex h-full !w-full flex-col overflow-hidden rounded-none border-0 bg-popover uppercase tracking-wider text-popover-foreground",
          className
        )}
        {...props}
      />
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
  ...props
}: Combobox.Input.Props) {
  return (
    <Combobox.Root items={[]}>
      <Combobox.InputGroup
        data-slot="command-input-wrapper"
        className={commandInputGroupClasses}
      >
        <SearchIcon className="size-4 shrink-0 text-accent-foreground drop-shadow-[0_0_3px_var(--accent-foreground)]" />
        <Combobox.Input
          {...props}
          data-slot="command-input"
          placeholder={placeholder}
          className={cn(commandInputClasses, className)}
        />
      </Combobox.InputGroup>
    </Combobox.Root>
  )
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof BaseCommandList>) {
  return (
    <BaseCommandList
      className={cn(
        "max-h-[320px] scroll-py-1 overflow-x-hidden overflow-y-auto uppercase tracking-wider",
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
        "overflow-hidden p-1 uppercase tracking-wider text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
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
        "uppercase tracking-wider",
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
      className={cn("uppercase tracking-wider", className)}
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
