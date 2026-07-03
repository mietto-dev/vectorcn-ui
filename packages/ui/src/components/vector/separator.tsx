import { cn } from "@workspace/ui/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<"hr"> & {
  orientation?: "horizontal" | "vertical"
  decorative?: boolean
}) {
  return (
    <hr
      role={decorative ? "none" : "separator"}
      aria-orientation={orientation}
      data-slot="separator-root"
      className={cn(
        "shrink-0 border-none",
        orientation === "horizontal"
          ? "h-0.5 w-full bg-[linear-gradient(90deg,var(--border)_75%,transparent_75%)] bg-[length:16px_8px]"
          : "h-full w-0.5 bg-[linear-gradient(0deg,var(--border)_75%,transparent_75%)] bg-[length:2px_16px]",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
