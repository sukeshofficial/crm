import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { unbilledTasks } from "@/data/mockData"

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount)
}

export function UnbilledTasksCard() {
  const total = unbilledTasks.reduce((acc, t) => acc + t.amount, 0)
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">Unbilled Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {unbilledTasks.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0"
            >
              <div>
                <p className="text-sm font-medium text-gray-900">{item.client}</p>
                <p className="text-xs text-gray-500">{item.tasks} tasks</p>
              </div>
              <span className="text-sm font-semibold text-gray-900">
                {formatCurrency(item.amount)}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-between border-t border-gray-200 pt-3">
          <span className="text-sm font-medium text-gray-700">Total</span>
          <span className="font-semibold text-gray-900">
            {formatCurrency(total)}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
