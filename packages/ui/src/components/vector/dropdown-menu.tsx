import { Menu as MenuPrimitive } from "@base-ui/react/menu"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@workspace/ui/lib/utils"
import {
  DropdownMenu as BaseDropdownMenu,
  DropdownMenuContent as BaseDropdownMenuContent,
  DropdownMenuGroup as BaseDropdownMenuGroup,
  DropdownMenuItem as BaseDropdownMenuItem,
  DropdownMenuLabel as BaseDropdownMenuLabel,
  DropdownMenuPortal as BaseDropdownMenuPortal,
  DropdownMenuSeparator as BaseDropdownMenuSeparator,
  DropdownMenuShortcut as BaseDropdownMenuShortcut,
  DropdownMenuSub as BaseDropdownMenuSub,
  DropdownMenuSubContent as BaseDropdownMenuSubContent,
  DropdownMenuSubTrigger as BaseDropdownMenuSubTrigger,
  DropdownMenuTrigger as BaseDropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

const DropdownMenu = BaseDropdownMenu

const DropdownMenuPortal = BaseDropdownMenuPortal

const DropdownMenuTrigger = BaseDropdownMenuTrigger

const DropdownMenuGroup = BaseDropdownMenuGroup

const DropdownMenuLabel = BaseDropdownMenuLabel

const DropdownMenuSeparator = BaseDropdownMenuSeparator

const DropdownMenuShortcut = BaseDropdownMenuShortcut

const DropdownMenuSub = BaseDropdownMenuSub

function DropdownMenuSubTrigger({
  className,
  children,
  ...props
}: MenuPrimitive.SubmenuTrigger.Props) {
  return (
    <BaseDropdownMenuSubTrigger
      className={cn(
        "rounded-none border-y-4 border-dashed border-transparent bg-transparent hover:border-foreground hover:bg-transparent focus:border-foreground focus:bg-transparent active:bg-transparent data-popup-open:border-foreground data-popup-open:bg-transparent dark:focus:border-ring dark:data-popup-open:border-ring data-open:bg-transparent",
        className
      )}
      {...props}
    >
      {children}
    </BaseDropdownMenuSubTrigger>
  )
}

function DropdownMenuItem({
  className,
  children,
  ...props
}: MenuPrimitive.Item.Props) {
  return (
    <BaseDropdownMenuItem
      className={cn(
        "rounded-none border-y-4 border-dashed border-transparent bg-transparent hover:border-foreground hover:bg-transparent focus:border-foreground focus:bg-transparent active:bg-transparent dark:focus:border-ring",
        className
      )}
      {...props}
    >
      {children}
    </BaseDropdownMenuItem>
  )
}

export const dropDownVariants = cva("")
function DropdownMenuSubContent({ children,
  className, ...props }: BitDropdownMenuContentProps) {
  return (
    <BaseDropdownMenuSubContent
      {...props}
      className={cn(
        "bg-popover",
        className
      )}
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
    </BaseDropdownMenuSubContent>
  )
}

export interface BitDropdownMenuContentProps
  extends
    React.ComponentProps<typeof BaseDropdownMenuContent>,
    VariantProps<typeof dropDownVariants> {}

function DropdownMenuContent({
  children,
  className,
  ...props
}: BitDropdownMenuContentProps) {
  return (
    <BaseDropdownMenuContent
      className={cn(
        "mt-1 bg-popover py-2",
        className
      )}
      {...props}
    >
      {children}

      <div
        className="pointer-events-none absolute inset-0 -mx-1.5 mt-2.5 border-x-6 border-foreground dark:border-ring"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -my-1.5 mt-1 border-y-6 border-foreground dark:border-ring"
        aria-hidden="true"
      />
    </BaseDropdownMenuContent>
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuShortcut,
  DropdownMenuSub,
}
