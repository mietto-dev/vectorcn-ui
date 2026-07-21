import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar"

import { cn } from "@workspace/ui/lib/utils"

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
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-10 shrink-0 overflow-hidden text-xs",
        className
      )}
    >
      {src ? (
        <AvatarPrimitive.Image
          data-slot="avatar-image"
          className="size-full object-cover"
          src={src}
          alt={alt ?? ""}
        />
      ) : (
        <AvatarPrimitive.Fallback
          data-slot="avatar-fallback"
          className="flex size-full items-center justify-center border-2 border-foreground bg-background text-sm tracking-wider uppercase dark:border-ring"
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
        </AvatarPrimitive.Fallback>
      )}
    </AvatarPrimitive.Root>
  )
}

export { Avatar }
