import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@workspace/ui/lib/utils"
import { Badge as BaseBadge } from "@workspace/ui/components/badge"

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
  extends
    Omit<React.ComponentProps<typeof BaseBadge>, "variant">,
    VariantProps<typeof badgeVariants> {
  variant?: "default" | "destructive" | "outline" | "secondary"
}

function Badge({ children, ...props }: BitBadgeProps) {
  const { variant = "default", className } = props

  const color = badgeVariants({ variant })

  return (
    <div className={cn("relative inline-flex", className)}>
      <BaseBadge
        {...props}
        className={cn(
          "rounded-none",
          className
        )}
        variant={variant}
      >
        {children}
      </BaseBadge>

      <div
        className={`absolute top-1.5 bottom-1.5 -left-1.5 h-1/2 w-1.5 border ${color}`}
      />
      <div
        className={`absolute top-1.5 -right-1.5 bottom-1.5 h-1/2 w-1.5 border ${color}`}
      />
    </div>
  )
}

export { Badge }
