import { cva, VariantProps } from "class-variance-authority"

import { hershey } from "@/config/fonts"
import { cn } from "@/lib/utils"
import { Button as ShadcnButton } from "@/components/ui/button"

export const buttonVariants = cva("", {
  variants: {
    font: {
      normal: `${hershey.className} uppercase`,
    },
    variant: {
      default:
        "bg-transparent hover:bg-transparent border-2 border-success hover:shadow-md hover:shadow-success text-success hover:text-shadow-md hover:text-shadow-success cursor-pointer",
      destructive: "bg-foreground",
      outline: "bg-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    },
    size: {
      default: "h-9 px-8 py-4 has-[>svg]:px-3 text-xl",
      sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
      lg: "h-10 px-6 has-[>svg]:px-4",
      icon: "size-9",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    font: "normal",
  },
})

export interface BitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  ref?: React.Ref<HTMLButtonElement>
}

function Button({ children, ...props }: BitButtonProps) {
  const { variant, className } = props
  return (
    <ShadcnButton
      {...props}
      className={cn(buttonVariants({ variant, className }))}
    >
      {children}
    </ShadcnButton>
  )
}

export { Button }
