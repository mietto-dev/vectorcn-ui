"use client"

import { ComponentPreviewShell } from "./component-preview-shell"
import {
  AlertPreview,
  AvatarPreview,
  BadgePreview,
  BreadcrumbPreview,
  ButtonPreview,
  CalendarPreview,
  CarouselPreview,
  ChartPreview,
  CheckboxPreview,
  ComboBoxPreview,
  InputPreview,
  InputOtpPreview,
  LabelPreview,
  PaginationPreview,
  ProgressPreview,
  RadioGroupPreview,
  ResizablePreview,
  SeparatorPreview,
  SkeletonPreview,
  SwitchPreview,
  TablePreview,
  TabsPreview,
  TextareaPreview,
  TogglePreview,
} from "./basic-component-previews"
import {
  AlertDialogPreview,
  CollapsiblePreview,
  CommandPreview,
  DialogPreview,
  DropdownMenuPreview,
  HoverCardPreview,
  PopoverPreview,
  SelectPreview,
  SheetPreview,
  TooltipPreview,
} from "./interactive-component-previews"

const previews = {
  alert: AlertPreview,
  "alert-dialog": AlertDialogPreview,
  avatar: AvatarPreview,
  badge: BadgePreview,
  breadcrumb: BreadcrumbPreview,
  button: ButtonPreview,
  calendar: CalendarPreview,
  carousel: CarouselPreview,
  chart: ChartPreview,
  checkbox: CheckboxPreview,
  "combo-box": ComboBoxPreview,
  collapsible: CollapsiblePreview,
  command: CommandPreview,
  dialog: DialogPreview,
  "dropdown-menu": DropdownMenuPreview,
  "hover-card": HoverCardPreview,
  input: InputPreview,
  "input-otp": InputOtpPreview,
  label: LabelPreview,
  pagination: PaginationPreview,
  popover: PopoverPreview,
  progress: ProgressPreview,
  "radio-group": RadioGroupPreview,
  resizable: ResizablePreview,
  select: SelectPreview,
  separator: SeparatorPreview,
  sheet: SheetPreview,
  skeleton: SkeletonPreview,
  switch: SwitchPreview,
  table: TablePreview,
  tabs: TabsPreview,
  textarea: TextareaPreview,
  toggle: TogglePreview,
  tooltip: TooltipPreview,
} satisfies Record<string, React.ComponentType>

type PreviewName = keyof typeof previews

export function ComponentPreview({ name }: { name: PreviewName }) {
  const Preview = previews[name]

  return (
    <ComponentPreviewShell>
      <Preview />
    </ComponentPreviewShell>
  )
}
