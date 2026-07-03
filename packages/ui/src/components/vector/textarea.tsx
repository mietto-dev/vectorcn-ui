import { cn } from "@workspace/ui/lib/utils"
import { Textarea as BaseTextarea } from "@workspace/ui/components/textarea"

function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className={cn("relative w-full", className)}>
      <BaseTextarea
        placeholder="Enter text"
        className={cn(
          "rounded-none border-0 ring-0 transition-transform",
          className
        )}
        {...props}
      />

      <div
        className="pointer-events-none absolute inset-0 -my-1.5 border-y-6 border-foreground dark:border-ring"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 -mx-1.5 border-x-6 border-foreground dark:border-ring"
        aria-hidden="true"
      />
    </div>
  )
}

export { Textarea }
