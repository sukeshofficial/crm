import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { ChartCard } from "./ChartCard"
import { taskSummary } from "@/data/mockData"
import { AlertCircle, Pause, Clock, CheckCircle } from "lucide-react"

const statusIcons = {
  Pending: AlertCircle,
  Hold: Pause,
  "In-Progress": Clock,
  Completed: CheckCircle,
}

const totalPending = taskSummary
  .filter((s) => s.name !== "Completed")
  .reduce((acc, s) => acc + s.value, 0)

export function TaskSummaryChart() {
  return (
    <ChartCard title="Task Summary">
      <div className="flex flex-col gap-4">
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={taskSummary}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                paddingAngle={2}
                dataKey="value"
              >
                {taskSummary.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-2">
          {taskSummary.map((item) => {
            const Icon = statusIcons[item.name]
            return (
              <div
                key={item.name}
                className="flex items-center justify-between text-sm"
              >
                <div className="flex items-center gap-2">
                  {Icon && <Icon className="h-4 w-4 text-gray-500" />}
                  <span className="text-gray-700">{item.name}</span>
                </div>
                <span className="font-medium text-gray-900">{item.value}</span>
              </div>
            )
          })}
        </div>
        <div className="rounded-lg bg-blue-50 p-3">
          <p className="text-sm font-medium text-blue-900">
            Need to complete tasks
          </p>
          <p className="text-2xl font-bold text-blue-700">{totalPending}</p>
        </div>
      </div>
    </ChartCard>
  )
}
