import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const borderColorMap = {
  gray: "border-l-gray-400",
  green: "border-l-green-500",
  red: "border-l-red-500",
  amber: "border-l-amber-500",
}

const textColorMap = {
  gray: "text-gray-600",
  green: "text-green-600",
  red: "text-red-600",
  amber: "text-amber-600",
}

export function StatCard({ label, count, color = "gray" }) {
  const borderCls = borderColorMap[color] || borderColorMap.gray
  const textCls = textColorMap[color] || textColorMap.gray
  return (
    <Card className={cn("border-l-4", borderCls)}>
      <CardContent className="p-4">
        <p className={cn("text-2xl font-bold", textCls)}>
          {count}
        </p>
        <p className="text-sm text-gray-500 mt-1">{label}</p>
      </CardContent>
    </Card>
  )
}
