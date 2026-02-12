import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { bestPerformers } from "@/data/mockData"
import { Trophy } from "lucide-react"

export function BestPerformerCard() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium flex items-center gap-2">
          <Trophy className="h-4 w-4 text-amber-500" />
          Best Performers
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {bestPerformers.map((performer, index) => (
            <li
              key={performer.id}
              className="flex items-center gap-3"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-600">
                {index + 1}
              </span>
              <Avatar className="h-9 w-9">
                <AvatarFallback className="text-xs bg-blue-100 text-blue-700">
                  {performer.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {performer.name}
                </p>
                <p className="text-xs text-gray-500">
                  {performer.tasksCompleted} tasks completed
                </p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
