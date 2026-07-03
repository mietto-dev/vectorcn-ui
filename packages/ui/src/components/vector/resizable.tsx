import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@workspace/ui/lib/utils"

const ResizablePanelGroup = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Group>) => (
  <div className={cn("relative h-full w-full", className)}>
    <ResizablePrimitive.Group
      className={cn(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col"
      )}
      {...props}
    >
      {children}
      <div className="pointer-events-none absolute top-0 left-0 h-1.5 w-full bg-foreground dark:bg-ring" />
      <div className="pointer-events-none absolute bottom-0 h-1.5 w-full bg-foreground dark:bg-ring" />
      <div className="pointer-events-none absolute top-1 -left-1 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      <div className="pointer-events-none absolute top-1 -right-1 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      <div className="pointer-events-none absolute bottom-1 -left-1 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      <div className="pointer-events-none absolute -right-1 bottom-1 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
    </ResizablePrimitive.Group>
  </div>
)

const ResizablePanel = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Panel>) => (
  <ResizablePrimitive.Panel
    className={cn("flex h-full w-full", className)}
    {...props}
  />
)

const ResizableHandle = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Separator>) => (
  <ResizablePrimitive.Separator
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    )}
    {...props}
  >
    <div className="z-10 flex h-4 w-1.5 items-center justify-center">
      <svg
        viewBox="0 0 256 256"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        strokeWidth="0.25"
        className="size-3 shrink-0"
        aria-label="grip"
      >
        <rect x="256" y="0" width="14" height="14" rx="1" />
        <rect x="256" y="48" width="14" height="14" rx="1" />
        <rect x="256" y="96" width="14" height="14" rx="1" />
        <rect x="256" y="144" width="14" height="14" rx="1" />
        <rect x="256" y="192" width="14" height="14" rx="1" />
        <rect x="256" y="240" width="14" height="14" rx="1" />
        <rect x="0" y="0" width="14" height="14" rx="1" />
        <rect x="0" y="48" width="14" height="14" rx="1" />
        <rect x="0" y="96" width="14" height="14" rx="1" />
        <rect x="0" y="144" width="14" height="14" rx="1" />
        <rect x="0" y="192" width="14" height="14" rx="1" />
        <rect x="0" y="240" width="14" height="14" rx="1" />
      </svg>
    </div>
  </ResizablePrimitive.Separator>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
