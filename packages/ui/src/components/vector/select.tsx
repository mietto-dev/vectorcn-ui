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
  

  return (
    <BaseSelectValue
      className={cn()}
      {...props}
    />
  )
}

interface BitSelectTriggerProps
  extends SelectPrimitive.Trigger.Props, VariantProps<typeof inputVariants> {}

function SelectTrigger({ children, ...props }: BitSelectTriggerProps) {
  const { className } = props

  return (
    <div
      className={cn(
        "relative border-y-6 border-foreground dark:border-ring",
        className
      )}
    >
      <BaseSelectTrigger
        {...props}
        className={cn("w-full rounded-none border-0 ring-0", className)}
      >
        {children}
      </BaseSelectTrigger>

      <div
        className="pointer-events-none absolute inset-0 -mx-1.5 border-x-6 border-foreground dark:border-ring"
        aria-hidden="true"
      />
    </div>
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
