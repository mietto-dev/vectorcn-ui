export default function CodeSnippet({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <pre className="overflow-x-auto rounded-none border bg-muted p-4 text-sm">
      <code>{children}</code>
    </pre>
  )
}
