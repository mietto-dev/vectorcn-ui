import { Metadata } from "next"
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

      <div className="flex min-h-[200px] flex-col items-center justify-center gap-4 border border-dashed p-6">
        <h2 className="text-sm text-muted-foreground">Preview</h2>
        <p className="text-sm text-muted-foreground">
          View the carousel component in action on the homepage.
        </p>
      </div>

      <InstallationCommands componentName="carousel" />
    </div>
  )
}
