import { Button } from "@workspace/ui/components/vector/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@workspace/ui/components/vector/alert-dialog"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/vector/collapsible"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/vector/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/vector/dropdown-menu"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/vector/hover-card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/vector/popover"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/vector/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/vector/sheet"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/vector/tooltip"
import { CommandExample } from "@/examples/command"

export function AlertDialogPreview() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button />}>Open Alert</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm vector launch</AlertDialogTitle>
          <AlertDialogDescription>
            This preview demonstrates the alert dialog trigger and actions.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export function CollapsiblePreview() {
  return (
    <Collapsible className="w-full max-w-xs">
      <CollapsibleTrigger render={<Button className="w-full" />}>Open Collapsible</CollapsibleTrigger>
      <CollapsibleContent className="mt-4 border border-dashed p-4 text-sm">
        Hidden telemetry details are now visible.
      </CollapsibleContent>
    </Collapsible>
  )
}

export function CommandPreview() {
  return <CommandExample />
}

export function DialogPreview() {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>Open Dialog</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Vector dialog</DialogTitle>
          <DialogDescription>
            A focused dialog preview with a visible trigger.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter showCloseButton />
      </DialogContent>
    </Dialog>
  )
}

export function DropdownMenuPreview() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button />}>Open Menu</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Copy</DropdownMenuItem>
        <DropdownMenuItem>Archive</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function HoverCardPreview() {
  return (
    <HoverCard>
      <HoverCardTrigger render={<Button />}>Open Hover Card</HoverCardTrigger>
      <HoverCardContent>
        <div className="text-sm font-medium">VectorCN</div>
        <p className="text-sm text-muted-foreground">Hover preview content.</p>
      </HoverCardContent>
    </HoverCard>
  )
}

export function PopoverPreview() {
  return (
    <Popover>
      <PopoverTrigger render={<Button />}>Open Popover</PopoverTrigger>
      <PopoverContent>
        <div className="text-sm font-medium">Popover preview</div>
        <p className="text-sm text-muted-foreground">Floating content anchored to the trigger.</p>
      </PopoverContent>
    </Popover>
  )
}

export function SelectPreview() {
  return (
    <Select defaultValue="vector">
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Select a mode" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Mode</SelectLabel>
          <SelectItem value="vector">Vector</SelectItem>
          <SelectItem value="crt">CRT</SelectItem>
          <SelectItem value="terminal">Terminal</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export function SheetPreview() {
  return (
    <Sheet>
      <SheetTrigger render={<Button />}>Open Sheet</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Vector sheet</SheetTitle>
          <SheetDescription>Slide-out preview content.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export function TooltipPreview() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button />}>Open Tooltip</TooltipTrigger>
        <TooltipContent>Tooltip preview content</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
