import { cn } from "@/lib/utils"

const actStyles = {
  GST: "bg-green-100 text-green-800 border-green-200",
  "Income Tax": "bg-blue-100 text-blue-800 border-blue-200",
  "PF & ESIC": "bg-purple-100 text-purple-800 border-purple-200",
  ROC: "bg-orange-100 text-orange-800 border-orange-200",
}

export function ActBadge({ act }) {
  const style = actStyles[act] || "bg-gray-100 text-gray-800 border-gray-200"

  return (
    <span
      className={cn(
        "inline-flex rounded-md border px-2.5 py-1 text-xs font-medium",
        style
      )}
    >
      {act}
    </span>
  )
}
