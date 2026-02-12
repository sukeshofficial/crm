import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

const statusVariantMap = {
  pending: "warning",
  "in-progress": "default",
  completed: "success",
  hold: "secondary",
}

export function TaskRow({ title, date, assignee, status }) {
  return (
    <div className="flex items-center justify-between gap-3 py-3 border-b border-gray-100 last:border-0">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">{title}</p>
        <p className="text-xs text-gray-500 mt-0.5">{date}</p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <Avatar className="h-6 w-6">
          <AvatarFallback className="text-[10px]">
            {assignee?.initials || "?"}
          </AvatarFallback>
        </Avatar>
        <span className="text-xs text-gray-600 truncate max-w-[80px]">
          {assignee?.name || "-"}
        </span>
        {status && (
          <Badge variant={statusVariantMap[status] || "secondary"} className="text-[10px] px-1.5 py-0">
            {status}
          </Badge>
        )}
      </div>
    </div>
  )
}

export function TaskCategoryRow({ name, count, progress }) {
  return (
    <div className="py-3 border-b border-gray-100 last:border-0">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-gray-900">{name}</span>
        <span className="text-sm text-gray-500">{count}</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  )
}
