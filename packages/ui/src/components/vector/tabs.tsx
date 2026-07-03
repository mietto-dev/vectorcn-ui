import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@workspace/ui/lib/utils"
import {
  Tabs as BaseTabs,
  TabsContent as BaseTabsContent,
  TabsList as BaseTabsList,
  TabsTrigger as BaseTabsTrigger,
} from "@workspace/ui/components/tabs"

export const tabsVariants = cva("", {
  variants: {
    variant: {
      default: "bg-primary",
    },
    },
  defaultVariants: {},
})

export interface BitTabsProps
  extends TabsPrimitive.Root.Props, VariantProps<typeof tabsVariants> {}

function Tabs({ className, ...props }: BitTabsProps) {
  return (
    <BaseTabs
      {...props}
      className={cn(
        "relative",
        className
      )}
    />
  )
}

function TabsList({ className, children, ...props }: TabsPrimitive.List.Props) {
  return (
    <div className="relative">
      <BaseTabsList
        {...props}
        className={cn("relative rounded-none bg-card", className)}
      >
        <div
          className="pointer-events-none absolute inset-0 -my-1.5 border-y-6 border-foreground dark:border-ring"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute inset-0 -mx-1.5 border-x-6 border-foreground dark:border-ring"
          aria-hidden="true"
        />
        {children}
      </BaseTabsList>
    </div>
  )
}

function TabsTrigger({
  className,
  children,
  ...props
}: TabsPrimitive.Tab.Props) {
  return (
    <BaseTabsTrigger
      className={cn(
        "rounded-none border-none text-muted-foreground data-active:bg-accent data-active:text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </BaseTabsTrigger>
  )
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return <BaseTabsContent className={cn("", className)} {...props} />
}

export { Tabs, TabsList, TabsContent, TabsTrigger }
