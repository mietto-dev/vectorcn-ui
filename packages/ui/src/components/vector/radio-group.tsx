import { Radio as RadioPrimitive } from "@base-ui/react/radio"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group"

import { cn } from "@workspace/ui/lib/utils"
import {
  RadioGroup as BaseRadioGroup,
  RadioGroupItem as BaseRadioGroupItem,
} from "@workspace/ui/components/radio-group"

function RadioGroup({ className, ...props }: RadioGroupPrimitive.Props) {
  return <BaseRadioGroup className={cn("", className)} {...props} />
}

function RadioGroupItem({ className, ...props }: RadioPrimitive.Root.Props) {
  return (
    <div className={cn("relative", className)}>
      <BaseRadioGroupItem
        className={cn(
          "peer flex size-4 shrink-0 items-center justify-center rounded-none border-none border-input py-3 outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30",
          "data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary"
        )}
        {...props}
      >
        <RadioPrimitive.Indicator>
          <svg
            viewBox="0 0 256 256"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth="0"
            className="w-2.5"
            aria-label="square"
          >
            <rect x="30" y="35" width="200" height="200" rx="0" />
            <rect x="80" y="5" width="100" height="200" rx="0" />
            <rect x="0" y="85" width="100" height="100" rx="0" />
            <rect x="80" y="65" width="100" height="200" rx="0" />
            <rect x="200" y="85" width="100" height="100" rx="0" />
          </svg>
        </RadioPrimitive.Indicator>
      </BaseRadioGroupItem>

      <div className="absolute top-[0px] left-1.5 h-1 w-2.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-[0px] right-1.5 h-1 w-2.5 bg-foreground dark:bg-ring" />

      <div className="absolute bottom-[0px] left-1.5 h-1 w-2.5 bg-foreground dark:bg-ring" />
      <div className="absolute right-1.5 bottom-[0px] h-1 w-2.5 bg-foreground dark:bg-ring" />

      <div className="absolute top-[4px] -left-1 h-[15px] w-1 bg-foreground dark:bg-ring" />
      <div className="absolute top-[4px] -right-1 h-[15px] w-1 bg-foreground dark:bg-ring" />

      <div className="absolute top-[2px] -right-0.5 h-1 w-1 bg-foreground dark:bg-ring" />
      <div className="absolute top-[2px] -left-0.5 h-1 w-1 bg-foreground dark:bg-ring" />

      <div className="absolute -right-0.5 bottom-[2px] h-1 w-1 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-[2px] -left-0.5 h-1 w-1 bg-foreground dark:bg-ring" />
    </div>
  )
}

export { RadioGroup, RadioGroupItem }
