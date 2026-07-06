import { Metadata } from "next"
import { ComponentPreview } from "@/components/docs/component-preview"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Carousel",
  description: "A CRT/vector-display styled carousel component.",
}
export default function CarouselPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Carousel</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled carousel component.
        </p>
      </div>

      <ComponentPreview name="carousel" />

      <InstallationCommands componentName="carousel" />
    </div>
  )
}
