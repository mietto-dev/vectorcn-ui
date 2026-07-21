import { Input as InputPrimitive } from "@base-ui/react/input"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@workspace/ui/lib/utils"

export const inputVariants = cva("")
export interface BitInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean
}

const inputControlClasses =
  "h-10 w-full min-w-0 rounded-none border border-accent-foreground/80 bg-accent-foreground/5 px-3 py-2 text-base text-foreground [--text-shadow-color:var(--foreground)] text-shadow-md shadow-[0_0_3px_var(--accent-foreground)] transition-[color,box-shadow,border-color] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-accent-foreground focus-visible:ring-0 focus-visible:shadow-[0_0_3px_var(--accent-foreground)] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:shadow-[0_0_3px_var(--destructive)] md:text-sm"

function Input({ className, ...props }: BitInputProps) {
  return (
    <InputPrimitive
      data-slot="input"
      className={cn(inputControlClasses, className)}
      {...props}
    />
  )
}

export { Input }
