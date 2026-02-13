import { cn } from "@/lib/utils"

export function DueDateBadge({ day, monthLabel }) {
  return (
    <div className="flex w-14 shrink-0 flex-col items-center justify-center rounded-lg border-l-4 border-green-500 bg-green-50 py-2 pl-2 pr-3">
      <span className="text-xl font-bold text-gray-900">{String(day).padStart(2, "0")}</span>
      <span className="text-xs text-gray-500">{monthLabel}</span>
    </div>
  )
}
