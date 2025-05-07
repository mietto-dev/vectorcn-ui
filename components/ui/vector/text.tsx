import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, VariantProps } from "class-variance-authority"

import { hershey, hersheyDuplex, vectorBattle } from "@/config/fonts"
import { cn } from "@/lib/utils"

const textVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: `${vectorBattle.className} scroll-m-20 text-3xl lg:text-4xl md:text-2xl font-light text-accent-foreground text-shadow-accent-foreground-glow text-shadow-xl tracking-widest uppercase`,
      h2: `${vectorBattle.className} scroll-m-20 pb-2 text-3xl font-bold tracking-tight uppercase`,
      h3: `${vectorBattle.className} scroll-m-20 text-2xl font-semibold tracking-tight uppercase`,
      h4: `${vectorBattle.className} scroll-m-20 text-xl font-semibold tracking-tight uppercase`,
      p: `${hershey.className} max-w-2xl text-sm md:text-base uppercase tracking-[3px] leading-7 [&:not(:first-child)]:mt-6 text-shadow-md`,
      lead: `${hershey.className} text-xl text-muted-foreground`,
      large: `${hershey.className} text-lg font-semibold`,
      small: `${hershey.className} text-sm font-medium leading-none`,
      muted: `${hershey.className} text-sm text-muted-foreground`,
      span: `${hershey.className} text-normal font-medium leading-none`,
      jumbo: `${hersheyDuplex.className} scroll-m-20 text-4xl md:text-3xl lg:text-[7rem] tracking-[-0.5rem] leading-none text-destructive text-shadow-destructive text-shadow-lg`,
    },
  },
  defaultVariants: {
    variant: "span",
  },
})

type VariantPropType = VariantProps<typeof textVariants>

const variantElementMap: Record<
  NonNullable<VariantPropType["variant"]>,
  string
> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  p: "p",
  lead: "p",
  large: "div",
  small: "small",
  muted: "p",
  span: "span",
  jumbo: "div",
}

type TextElement = "h1" | "h2" | "h3" | "h4" | "p" | "small" | "div" | "span"

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean
  as?: TextElement
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, variant, as, asChild, ...props }, ref) => {
    const Comp = asChild
      ? Slot
      : (as ?? (variant ? variantElementMap[variant] : undefined) ?? "span")
    return (
      <Comp
        className={cn(textVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Text.displayName = "Text"

export { Text, textVariants }
