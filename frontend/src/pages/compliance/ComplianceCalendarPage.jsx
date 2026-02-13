import { useState } from "react"
import { Sidebar } from "@/components/layout/Sidebar"
import { Header } from "@/components/layout/Header"
import { ComplianceHeader } from "@/components/compliance/ComplianceHeader"
import { PeriodSelector } from "@/components/compliance/PeriodSelector"
import { ComplianceTable } from "@/components/compliance/ComplianceTable"
import { mockComplianceData } from "@/data/mockComplianceData"

export function ComplianceCalendarPage() {
  const [period, setPeriod] = useState("May 2025")
  const monthLabel = period.split(" ")[0]

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mx-auto max-w-[1200px] space-y-6">
            <ComplianceHeader />
            <PeriodSelector value={period} onChange={setPeriod} />
            <ComplianceTable data={mockComplianceData} monthLabel={monthLabel} />
          </div>
        </main>
      </div>
    </div>
  )
}
