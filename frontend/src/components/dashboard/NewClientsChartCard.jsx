import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { mockNewClients } from "@/data/mockNewClients"
import { Calendar } from "lucide-react"

const totalClients = mockNewClients.reduce((acc, c) => acc + c.value, 0)

export function NewClientsChartCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium">
          New Clients {totalClients}
        </CardTitle>
        <Calendar className="h-4 w-4 text-gray-500" />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="h-48 w-full sm:h-52 sm:min-w-[200px] sm:max-w-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mockNewClients}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={65}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {mockNewClients.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:flex-1 sm:grid-cols-2 md:grid-cols-4">
            {mockNewClients.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <span
                  className="h-3 w-3 shrink-0 rounded-sm"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-gray-700 truncate">{item.name}</span>
                <span className="text-sm font-medium text-gray-900 shrink-0">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
