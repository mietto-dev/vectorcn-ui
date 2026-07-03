import { Popover as PopoverPrimitive } from "@base-ui/react/popover"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@workspace/ui/lib/utils"
import {
  Popover as BasePopover,
  PopoverContent as BasePopoverContent,
  PopoverTrigger as BasePopoverTrigger,
} from "@workspace/ui/components/popover"

const Popover = BasePopover

const PopoverTrigger = BasePopoverTrigger

export const popOverVariants = cva("")
export interface BitPopoverProps
  extends React.ComponentProps<"div">, VariantProps<typeof popOverVariants> {}

function PopoverContent({
  children,
  className,
  ...props
}: BitPopoverProps) {
  return (
    <BasePopoverContent
      className={cn(
        "relative mt-1 rounded-none border-y-6 border-foreground bg-card dark:border-ring",
        className
      )}
      {...props}
    >
      {children}

      <div
        className="pointer-events-none absolute inset-0 -mx-1.5 border-x-6 border-foreground dark:border-ring"
        aria-hidden="true"
      />
    </BasePopoverContent>
  )
}

export { Popover, PopoverTrigger, PopoverContent }
