import { FileText } from "lucide-react"

export function InvoicePendingCard({ packagesCount = 24, tasksCount = 137 }) {
  return (
    <div className="flex rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 p-5 shadow-lg">
      <div className="flex flex-1 flex-col justify-between gap-4">
        <h3 className="text-base font-medium text-white">Need to make invoice</h3>
        <div className="flex gap-6">
          <div>
            <p className="text-2xl font-bold text-white">{packagesCount}</p>
            <p className="text-sm text-blue-100">Packages</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">{tasksCount}</p>
            <p className="text-sm text-blue-100">Tasks</p>
          </div>
        </div>
      </div>
      <div className="flex shrink-0 items-start">
        <FileText className="h-10 w-10 text-white/80" />
      </div>
    </div>
  )
}
