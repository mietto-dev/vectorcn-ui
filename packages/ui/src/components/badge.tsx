import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@workspace/ui/lib/utils"

export const badgeVariants = cva("", {
  variants: {
    variant: {
      default: "border-primary bg-primary",
      destructive: "border-destructive bg-destructive",
      outline: "border-background bg-background",
      secondary: "border-secondary bg-secondary",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface BitBadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {
  variant?: "default" | "destructive" | "outline" | "secondary"
}

function Badge({ children, className, variant = "default", ...props }: BitBadgeProps) {
  const color = badgeVariants({ variant })

  return (
    <div className={cn("relative inline-flex", className)}>
      <span
        data-slot="badge"
        className={cn(
          "inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 rounded-none border px-2 py-0.5 text-xs font-medium whitespace-nowrap",
          className
        )}
        {...props}
      >
        {children}
      </span>

      <div
        className={cn("absolute top-1.5 bottom-1.5 -left-1.5 h-1/2 w-1.5 border", color)}
        aria-hidden="true"
      />
      <div
        className={cn("absolute top-1.5 -right-1.5 bottom-1.5 h-1/2 w-1.5 border", color)}
        aria-hidden="true"
      />
    </div>
  )
}

export { Badge }
