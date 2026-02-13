import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CalendarX2 } from "lucide-react"

export function HolidaysCard() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-medium">Upcoming Holidays</CardTitle>
      </CardHeader>
      <CardContent className="flex min-h-[200px] flex-col items-center justify-center text-center">
        <CalendarX2 className="mb-3 h-10 w-10 text-gray-300" />
        <p className="text-sm text-gray-500">There are no Data</p>
      </CardContent>
    </Card>
  )
}

