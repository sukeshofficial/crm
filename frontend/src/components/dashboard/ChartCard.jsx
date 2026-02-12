import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function ChartCard({ title, children, className = "" }) {
  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
