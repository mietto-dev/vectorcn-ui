import { Toggle as TogglePrimitive } from "@base-ui/react/toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@workspace/ui/lib/utils"

const toggleVariants = cva("", {
  variants: {
    variant: {
      default: "bg-transparent",
      outline: "bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
    },
    size: {
      default: "h-9 min-w-9 px-2",
      sm: "h-8 min-w-8 px-1.5",
      lg: "h-10 min-w-10 px-2.5",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

export interface BitToggleProps
  extends TogglePrimitive.Props,
    VariantProps<typeof toggleVariants> {}

function Toggle({ children, className, variant, size, ...props }: BitToggleProps) {
  return (
    <TogglePrimitive
      data-slot="toggle"
      className={cn(
        toggleVariants({ variant, size }),
        "relative rounded-none border-none transition-transform active:translate-x-1 active:translate-y-1",
        "data-pressed:bg-primary data-pressed:text-primary-foreground",
        className
      )}
      {...props}
    >
      {children}

      {variant === "outline" && (
        <>
          <div
            className="pointer-events-none absolute inset-0 -my-1.5 border-y-6 border-foreground dark:border-ring"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 -mx-1.5 border-x-6 border-foreground dark:border-ring"
            aria-hidden="true"
          />
        </>
      )}
    </TogglePrimitive>
  )
}

export { Toggle, toggleVariants }
