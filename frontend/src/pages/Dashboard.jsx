import { StatCard } from "@/components/dashboard/StatCard"
import { TodoPanel } from "@/components/dashboard/TodoPanel"
import { TasksPanel } from "@/components/dashboard/TasksPanel"
import { TaskSummaryChart } from "@/components/dashboard/TaskSummaryChart"
import { PerformanceChart } from "@/components/dashboard/PerformanceChart"
import { ComplianceDeadlines } from "@/components/dashboard/ComplianceDeadlines"
import { UnbilledTasksCard } from "@/components/dashboard/UnbilledTasksCard"
import { BestPerformerCard } from "@/components/dashboard/BestPerformerCard"
import { TimeCard } from "@/components/dashboard/TimeCard"
import { UsefulLinksCard } from "@/components/dashboard/UsefulLinksCard"
import { ComplianceCalendar } from "@/components/dashboard/ComplianceCalendar"
import { HolidaysCard } from "@/components/dashboard/HolidaysCard"
import { Sidebar } from "@/components/layout/Sidebar"
import { Header } from "@/components/layout/Header"
import { statCards } from "@/data/mockData"

export function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mx-auto max-w-[1600px] space-y-6">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {statCards.map((stat) => (
                <StatCard
                  key={stat.id}
                  label={stat.label}
                  count={stat.count}
                  color={stat.color}
                />
              ))}
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <TodoPanel />
                  <TasksPanel />
                </div>
                <div className="grid gap-6 lg:grid-cols-2">
                  <TaskSummaryChart />
                  <PerformanceChart />
                </div>
              </div>
              <div className="space-y-6">
                <ComplianceDeadlines />
                <UnbilledTasksCard />
                <BestPerformerCard />
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <div className="space-y-4">
                <TimeCard />
                <UsefulLinksCard />
              </div>
              <ComplianceCalendar />
              <HolidaysCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
