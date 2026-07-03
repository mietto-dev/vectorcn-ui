import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@workspace/ui/lib/utils"
import { Checkbox as BaseCheckbox } from "@workspace/ui/components/checkbox"

export const checkboxVariants = cva("")
export interface BitCheckboxProps
  extends CheckboxPrimitive.Root.Props, VariantProps<typeof checkboxVariants> {}

function Checkbox({ className, ...props }: BitCheckboxProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center border-y-6 border-foreground dark:border-ring",
        className
      )}
    >
      <BaseCheckbox
        className={cn(
          "size-5 rounded-none border-none ring-0"
        )}
        {...props}
      />

      <div
        className="pointer-events-none absolute inset-0 -mx-1.5 border-x-6 border-foreground dark:border-ring"
        aria-hidden="true"
      />
    </div>
  )
}

export { Checkbox }
