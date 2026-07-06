import { Avatar } from "@workspace/ui/components/vector/avatar"
import { Badge } from "@workspace/ui/components/vector/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/vector/breadcrumb"
import { Button } from "@workspace/ui/components/vector/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/vector/carousel"
import { Checkbox } from "@workspace/ui/components/vector/checkbox"
import { Input } from "@workspace/ui/components/vector/input"
import { Label } from "@workspace/ui/components/vector/label"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/vector/pagination"
import { Progress } from "@workspace/ui/components/vector/progress"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/vector/radio-group"
import { Separator } from "@workspace/ui/components/vector/separator"
import { Skeleton } from "@workspace/ui/components/vector/skeleton"
import { Switch } from "@workspace/ui/components/vector/switch"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/vector/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/vector/tabs"
import { Textarea } from "@workspace/ui/components/vector/textarea"
import { Toggle } from "@workspace/ui/components/vector/toggle"
import { CalendarExample } from "@/examples/calendar"
import { ChartExample } from "@/components/blocks/chart"
import { ComboBoxExample } from "@/examples/combobox"

export function AlertPreview() {
  return (
    <div className="max-w-md border border-dashed p-4">
      <div className="font-bold uppercase tracking-[3px]">System ready</div>
      <p className="text-sm text-muted-foreground">
        Vector telemetry is online and receiving signal.
      </p>
    </div>
  )
}

export function AvatarPreview() {
  return <Avatar alt="Vector user" />
}

export function BadgePreview() {
  return <Badge>Stable</Badge>
}

export function BreadcrumbPreview() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Components</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export function ButtonPreview() {
  return <Button>Button</Button>
}

export function CalendarPreview() {
  return <CalendarExample />
}

export function ChartPreview() {
  return <ChartExample />
}

export function CarouselPreview() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {[1, 2, 3].map((item) => (
          <CarouselItem key={item}>
            <div className="flex h-28 items-center justify-center border border-dashed text-2xl">
              {item}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export function CheckboxPreview() {
  return (
    <div className="flex items-center gap-3">
      <Checkbox id="docs-checkbox" defaultChecked />
      <Label htmlFor="docs-checkbox">Enable vectors</Label>
    </div>
  )
}

export function ComboBoxPreview() {
  return <ComboBoxExample />
}

export function InputPreview() {
  return <Input className="max-w-xs" placeholder="m@example.com" />
}

export function InputOtpPreview() {
  return (
    <div className="flex gap-2" aria-label="Input OTP preview">
      {["1", "2", "3", "4", "5", "6"].map((digit) => (
        <div
          key={digit}
          className="flex size-10 items-center justify-center border border-accent-foreground/80 bg-accent-foreground/5 text-sm text-foreground shadow-[0_0_3px_var(--accent-foreground)]"
        >
          {digit}
        </div>
      ))}
    </div>
  )
}

export function LabelPreview() {
  return (
    <div className="grid w-full max-w-xs gap-2">
      <Label htmlFor="docs-label-input">Signal name</Label>
      <Input id="docs-label-input" placeholder="Vector" />
    </div>
  )
}

export function PaginationPreview() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
        <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
        <PaginationItem><PaginationEllipsis /></PaginationItem>
        <PaginationItem><PaginationNext href="#" /></PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export function ProgressPreview() {
  return <Progress className="max-w-xs" value={64} />
}

export function RadioGroupPreview() {
  return (
    <RadioGroup defaultValue="radar" className="flex gap-6">
      <div className="flex items-center gap-2">
        <RadioGroupItem id="radar" value="radar" />
        <Label htmlFor="radar">Radar</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem id="laser" value="laser" />
        <Label htmlFor="laser">Laser</Label>
      </div>
    </RadioGroup>
  )
}

export function ResizablePreview() {
  return (
    <div className="flex h-32 w-full max-w-md border border-dashed">
      <div className="flex flex-1 items-center justify-center p-4">One</div>
      <div className="w-1 bg-border" aria-label="resize handle" />
      <div className="flex flex-1 items-center justify-center p-4">Two</div>
    </div>
  )
}

export function SeparatorPreview() {
  return (
    <div className="w-full max-w-xs space-y-3 text-sm">
      <div>Navigation</div>
      <Separator />
      <div className="text-muted-foreground">Components</div>
    </div>
  )
}

export function SkeletonPreview() {
  return <Skeleton className="h-24 w-full max-w-xs" />
}

export function SwitchPreview() {
  return (
    <div className="flex items-center gap-3">
      <Switch id="docs-switch" defaultChecked />
      <Label htmlFor="docs-switch">Vector mode</Label>
    </div>
  )
}

export function TablePreview() {
  return (
    <Table>
      <TableHeader>
        <TableRow><TableHead>Component</TableHead><TableHead>Status</TableHead></TableRow>
      </TableHeader>
      <TableBody>
        <TableRow><TableCell>Calendar</TableCell><TableCell>Ready</TableCell></TableRow>
        <TableRow><TableCell>Dialog</TableCell><TableCell>Ready</TableCell></TableRow>
      </TableBody>
    </Table>
  )
}

export function TabsPreview() {
  return (
    <Tabs defaultValue="preview" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="pt-4">Live component preview.</TabsContent>
      <TabsContent value="code" className="pt-4">Install command ready.</TabsContent>
    </Tabs>
  )
}

export function TextareaPreview() {
  return <Textarea className="max-w-xs" placeholder="Type a message..." />
}

export function TogglePreview() {
  return <Toggle variant="outline">Toggle</Toggle>
}
