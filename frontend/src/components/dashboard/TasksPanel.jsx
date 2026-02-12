import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { TaskCategoryRow } from "./TaskRow"
import { taskCategories } from "@/data/mockData"

export function TasksPanel() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="pending">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="hold">Hold</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <TabsContent value="pending" className="mt-3">
            {taskCategories.pending.map((cat) => (
              <TaskCategoryRow
                key={cat.id}
                name={cat.name}
                count={cat.count}
                progress={cat.progress}
              />
            ))}
          </TabsContent>
          <TabsContent value="hold" className="mt-3">
            {taskCategories.hold.map((cat) => (
              <TaskCategoryRow
                key={cat.id}
                name={cat.name}
                count={cat.count}
                progress={cat.progress}
              />
            ))}
          </TabsContent>
          <TabsContent value="in-progress" className="mt-3">
            {taskCategories["in-progress"].map((cat) => (
              <TaskCategoryRow
                key={cat.id}
                name={cat.name}
                count={cat.count}
                progress={cat.progress}
              />
            ))}
          </TabsContent>
          <TabsContent value="completed" className="mt-3">
            {taskCategories.completed.map((cat) => (
              <TaskCategoryRow
                key={cat.id}
                name={cat.name}
                count={cat.count}
                progress={cat.progress}
              />
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
