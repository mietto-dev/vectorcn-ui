import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@workspace/ui/lib/utils"
import { Input as BaseInput } from "@workspace/ui/components/input"

export const inputVariants = cva("")
export interface BitInputProps
  extends
    React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean
}

function Input({ ...props }: BitInputProps) {
  const { className } = props

  return (
    <div
      className={cn(
        "relative flex items-center border-y-6 border-foreground !p-0 dark:border-ring",
        className
      )}
    >
      <BaseInput
        {...props}
        className={cn(
          "!w-full rounded-none ring-0",
          className
        )}
      />

      <div
        className="pointer-events-none absolute inset-0 -mx-1.5 border-x-6 border-foreground dark:border-ring"
        aria-hidden="true"
      />
    </div>
  )
}

export { Input }
