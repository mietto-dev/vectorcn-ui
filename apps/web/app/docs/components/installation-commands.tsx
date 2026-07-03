import CodeSnippet from "./code-snippet"

interface InstallationCommandsProps {
  componentName: string
  registryName?: string
}

export default function InstallationCommands({
  componentName,
  registryName,
}: InstallationCommandsProps) {
  const name = registryName || `vectorcn-${componentName}`

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-bold">Installation</h3>
      <p>Run the following command to add the component:</p>
      <CodeSnippet>{`pnpm dlx shadcn@latest add ${name}`}</CodeSnippet>
      <p>Then import it:</p>
      <CodeSnippet>{`import { ${componentName
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(
          ""
        )} } from "@/components/ui/vector/${componentName}"`}</CodeSnippet>
    </div>
  )
}
