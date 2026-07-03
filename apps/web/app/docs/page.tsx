import { Metadata } from "next"

import { Separator } from "@workspace/ui/components/separator"

export const metadata: Metadata = {
  title: "Installation",
  description: "How to install dependencies and structure your app.",
}

export default function Page() {
  return (
    <div className="mx-auto flex max-w-[1400px] flex-col gap-10 px-4 py-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Installation</h1>
        <h3 className="text-muted-foreground">
          How to install dependencies and structure your app.
        </h3>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">TypeScript</h2>
        <Separator />
        <p>
          This project and the components are written in TypeScript. We
          recommend using TypeScript for your project as well.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold">1. Create Project</h3>
        <p>
          Run the init command to create a new Next.js project or to setup an
          existing one:
        </p>
        <pre className="overflow-x-auto bg-muted p-4 text-sm">
          <code>pnpm dlx shadcn@latest init</code>
        </pre>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold">2. Add Components</h3>
        <p>You can now start adding components to your project.</p>
        <pre className="overflow-x-auto bg-muted p-4 text-sm">
          <code>pnpm dlx shadcn@latest add vectorcn-button</code>
        </pre>
        <p>
          The command above will add the Button component to your project. You
          can then import it like this:
        </p>
        <pre className="overflow-x-auto bg-muted p-4 text-sm">
          <code>{`import { Button } from "@/components/ui/vector/button"

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}`}</code>
        </pre>
      </div>
    </div>
  )
}
