import { cn } from "@workspace/ui/lib/utils"
import { Textarea as BaseTextarea } from "@workspace/ui/components/textarea"

const textareaClasses =
  "min-h-32 w-full resize-none rounded-none border border-accent-foreground/80 bg-accent-foreground/5 px-3 py-2 text-base text-foreground [--text-shadow-color:var(--foreground)] text-shadow-md shadow-[0_0_3px_var(--accent-foreground)] transition-[color,box-shadow,border-color] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-accent-foreground focus-visible:ring-0 focus-visible:shadow-[0_0_3px_var(--accent-foreground)] disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:shadow-[0_0_3px_var(--destructive)] md:text-sm"

function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <BaseTextarea
      placeholder="Enter text"
      className={cn(textareaClasses, className)}
      {...props}
    />
  )
}

export { Textarea }
