import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { complianceCalendarEntries } from "@/data/mockData"
import { ArrowRight } from "lucide-react"

export function ComplianceCalendar() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="text-base font-medium">Compliance Calendar</CardTitle>
        <ArrowRight className="h-4 w-4 text-gray-400" />
      </CardHeader>
      <CardContent className="pt-0">
        <ul>
          {complianceCalendarEntries.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between gap-4 border-b border-dotted border-gray-200 py-2.5 last:border-b-0"
            >
              <span className="text-sm font-medium text-emerald-600">
                {item.date}
              </span>
              <div className="flex flex-1 flex-col items-end text-right">
                <span className="text-sm font-medium text-gray-900">
                  {item.title}
                </span>
                <span className="mt-0.5 text-xs text-gray-500">
                  {item.subtitle}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

