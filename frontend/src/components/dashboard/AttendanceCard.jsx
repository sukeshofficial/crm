import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { mockAttendance } from "@/data/mockAttendance"
import { Calendar, ChevronRight } from "lucide-react"

const timeFilters = [
  { value: "all", label: "All Time" },
  { value: "month", label: "This Month" },
  { value: "week", label: "This Week" },
]

export function AttendanceCard() {
  const [filter, setFilter] = useState("all")

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-base font-medium">Attendance</CardTitle>
        <div className="flex items-center gap-1">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="h-8 w-[110px] border-0 bg-transparent shadow-none">
              <Calendar className="mr-1.5 h-4 w-4 text-gray-500" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {timeFilters.map((f) => (
                <SelectItem key={f.value} value={f.value}>
                  {f.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="px-6 pt-0">
        <div className="overflow-x-auto px-1">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="pb-3 pl-2 pr-4 text-left font-medium text-gray-500">
                  USER
                </th>
                <th className="pb-3 pr-4 text-right font-medium text-gray-500">
                  PRESENT
                </th>
                <th className="pb-3 pr-4 text-right font-medium text-gray-500">
                  ABSENT
                </th>
                <th className="pb-3 pl-4 text-right font-medium text-gray-500">%</th>
              </tr>
            </thead>
            <tbody>
              {mockAttendance.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-gray-50 last:border-0"
                >
                  <td className="py-3 pl-2 pr-4">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs bg-gray-200 text-gray-600">
                          {user.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.role}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 pr-4 text-right font-medium text-blue-600">
                    {user.present}
                  </td>
                  <td className="py-3 pr-4 text-right font-medium text-blue-600">
                    {user.absent}
                  </td>
                  <td className="py-3 pl-4 text-right font-medium text-blue-600">
                    {user.percent}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
