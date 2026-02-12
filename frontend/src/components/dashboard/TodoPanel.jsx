import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { TaskRow } from "./TaskRow"
import { todoItems } from "@/data/mockData"

export function TodoPanel() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">To-Do</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="today">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="today">Today&apos;s</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <TabsContent value="today" className="mt-3">
            {todoItems.today.map((item) => (
              <TaskRow
                key={item.id}
                title={item.title}
                date={item.date}
                assignee={item.assignee}
                status={item.status}
              />
            ))}
          </TabsContent>
          <TabsContent value="upcoming" className="mt-3">
            {todoItems.upcoming.map((item) => (
              <TaskRow
                key={item.id}
                title={item.title}
                date={item.date}
                assignee={item.assignee}
                status={item.status}
              />
            ))}
          </TabsContent>
          <TabsContent value="completed" className="mt-3">
            {todoItems.completed.map((item) => (
              <TaskRow
                key={item.id}
                title={item.title}
                date={item.date}
                assignee={item.assignee}
                status={item.status}
              />
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
