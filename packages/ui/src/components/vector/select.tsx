import { Select as SelectPrimitive } from "@base-ui/react/select"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@workspace/ui/lib/utils"
import {
  Select as BaseSelect,
  SelectContent as BaseSelectContent,
  SelectGroup as BaseSelectGroup,
  SelectItem as BaseSelectItem,
  SelectLabel as BaseSelectLabel,
  SelectScrollDownButton as BaseSelectScrollDownButton,
  SelectScrollUpButton as BaseSelectScrollUpButton,
  SelectSeparator as BaseSelectSeparator,
  SelectTrigger as BaseSelectTrigger,
  SelectValue as BaseSelectValue,
} from "@workspace/ui/components/select"

export const inputVariants = cva("")
const inputControlClasses =
  "h-10 w-full rounded-none border border-accent-foreground/80 bg-accent-foreground/5 px-3 py-2 text-base text-foreground [--text-shadow-color:var(--foreground)] text-shadow-md shadow-[0_0_3px_var(--accent-foreground)] transition-[color,box-shadow,border-color] duration-200 outline-none focus-visible:border-accent-foreground focus-visible:ring-0 focus-visible:shadow-[0_0_3px_var(--accent-foreground)] disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:shadow-[0_0_3px_var(--destructive)] data-placeholder:text-muted-foreground *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"

export interface BitSelectProps
  extends
    React.SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof inputVariants> {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Select({ ...props }: SelectPrimitive.Root.Props<any>) {
  return <BaseSelect {...props} />
}

function SelectGroup({ ...props }: SelectPrimitive.Group.Props) {
  return <BaseSelectGroup {...props} />
}

interface BitSelectValueProps
  extends SelectPrimitive.Value.Props, VariantProps<typeof inputVariants> {}

function SelectValue({ ...props }: BitSelectValueProps) {
  return <BaseSelectValue className={cn()} {...props} />
}

interface BitSelectTriggerProps
  extends SelectPrimitive.Trigger.Props, VariantProps<typeof inputVariants> {}

function SelectTrigger({
  children,
  className,
  ...props
}: BitSelectTriggerProps) {
  return (
    <BaseSelectTrigger
      {...props}
      className={cn(inputControlClasses, className)}
    >
      {children}
    </BaseSelectTrigger>
  )
}

export interface BitSelectContentProps
  extends SelectPrimitive.Popup.Props, VariantProps<typeof inputVariants> {}

function SelectContent({
  className,
  children,
  ...props
}: BitSelectContentProps) {
  return (
    <BaseSelectContent
      className={cn(
        className,
        "rounded-none border-4 border-foreground dark:border-ring"
      )}
      {...props}
    >
      {children}
    </BaseSelectContent>
  )
}

function SelectLabel({
  className,
  ...props
}: SelectPrimitive.GroupLabel.Props) {
  return <BaseSelectLabel className={cn(className)} {...props} />
}

function SelectItem({
  className,
  children,
  ...props
}: SelectPrimitive.Item.Props) {
  return (
    <BaseSelectItem
      className={cn(
        className,
        "rounded-none border-t border-b border-dashed border-ring/0 hover:border-foreground dark:hover:border-ring"
      )}
      {...props}
    >
      {children}
    </BaseSelectItem>
  )
}

function SelectSeparator({
  className,
  ...props
}: SelectPrimitive.Separator.Props) {
  return <BaseSelectSeparator className={cn(className)} {...props} />
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpArrow>) {
  return <BaseSelectScrollUpButton className={cn(className)} {...props} />
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownArrow>) {
  return <BaseSelectScrollDownButton className={cn(className)} {...props} />
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
