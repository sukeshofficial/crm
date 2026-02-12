import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { complianceDeadlines } from "@/data/mockData"
import { Calendar } from "lucide-react"

export function ComplianceDeadlines() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">
          Compliance Deadlines
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {complianceDeadlines.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between gap-3 rounded-lg border border-gray-100 p-3 hover:bg-gray-50"
            >
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {item.title}
                </p>
                <div className="flex items-center gap-1.5 mt-1 text-xs text-gray-500">
                  <Calendar className="h-3.5 w-3.5 shrink-0" />
                  {item.dueDate}
                </div>
              </div>
              <Badge
                variant={item.daysLeft <= 10 ? "destructive" : "secondary"}
                className="shrink-0"
              >
                {item.daysLeft} days
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
