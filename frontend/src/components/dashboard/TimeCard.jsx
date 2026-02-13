import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { dashboardTimeStats } from "@/data/mockData"

export function TimeCard() {
  return (
    <Card className="border-0 bg-amber-400 text-white shadow-md">
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl font-semibold md:text-3xl">
          {dashboardTimeStats.avgTimeSpent}
        </CardTitle>
        <CardDescription className="text-sm text-amber-50/90">
          {dashboardTimeStats.subtitle}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

