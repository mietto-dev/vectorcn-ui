import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@workspace/ui/lib/utils"

export const buttonVariants = cva(
  "rounded-none uppercase tracking-[3px] text-shadow-md",
  {
    variants: {
      variant: {
        default:
          "dotted-fill dotted-fill-success cursor-pointer border-2 border-success bg-transparent text-success hover:bg-transparent hover:text-shadow-lg hover:text-shadow-success",
        destructive: "bg-foreground",
        outline:
          "cursor-pointer border-2 border-success bg-transparent text-success hover:bg-transparent hover:shadow-md hover:shadow-success hover:text-shadow-md hover:text-shadow-success",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-8 py-4 text-xl has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-7",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BitButtonProps
  extends ButtonPrimitive.Props,
    VariantProps<typeof buttonVariants> {}

function Button({ className, variant, size, ...props }: BitButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button }
