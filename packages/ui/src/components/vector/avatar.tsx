import { cn } from "@workspace/ui/lib/utils"
import {
  Avatar as BaseAvatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar"

function Avatar({
  className,
  src,
  alt,
}: {
  className?: string
  src?: string
  alt?: string
}) {
  return (
    <BaseAvatar
      className={cn(
        "relative flex size-10 shrink-0 overflow-hidden text-xs font-hershey",
        className
      )}
    >
      {src ? (
        <AvatarImage src={src} alt={alt ?? ""} />
      ) : (
        <AvatarFallback
          className={cn(
            "flex size-full items-center justify-center border-2 border-foreground bg-background text-sm tracking-wider uppercase dark:border-ring"
          )}
        >
          <svg
            viewBox="0 0 256 256"
            className="size-full"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth="0.25"
            aria-label="avatar-placeholder"
          >
            <rect x="0" y="0" width="256" height="256" />
          </svg>
        </AvatarFallback>
      )}
    </BaseAvatar>
  )
}

export { Avatar }
