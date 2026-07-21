import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { cva, type VariantProps } from "class-variance-authority"
import { CheckIcon } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

export const checkboxVariants = cva("")
export interface BitCheckboxProps
  extends CheckboxPrimitive.Root.Props,
    VariantProps<typeof checkboxVariants> {}

function Checkbox({ className, ...props }: BitCheckboxProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center border-y-6 border-foreground dark:border-ring",
        className
      )}
    >
      <CheckboxPrimitive.Root
        data-slot="checkbox"
        className="peer relative flex size-5 shrink-0 items-center justify-center rounded-none border-none bg-input/90 ring-0 outline-none data-checked:bg-primary data-checked:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50"
        {...props}
      >
        <CheckboxPrimitive.Indicator
          data-slot="checkbox-indicator"
          className="grid place-content-center text-current [&>svg]:size-3.5"
        >
          <CheckIcon />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      <div
        className="pointer-events-none absolute inset-0 -mx-1.5 border-x-6 border-foreground dark:border-ring"
        aria-hidden="true"
      />
    </div>
  )
}

export { Checkbox }
