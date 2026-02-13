import { Card, CardContent } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ComplianceRow } from "./ComplianceRow"

export function ComplianceTable({ data, monthLabel = "MAY" }) {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="border-b border-gray-100 px-6 py-4">
          <h2 className="text-xl font-bold uppercase tracking-wide text-gray-900">
            {monthLabel}
          </h2>
        </div>
        <div className="max-h-[500px] overflow-auto">
          <Table>
            <TableHeader className="sticky top-0 z-10 bg-white shadow-sm">
              <TableRow className="border-b border-gray-200 bg-gray-50/95 hover:bg-gray-50/95">
                <TableHead className="w-[120px]">Due Date</TableHead>
                <TableHead>Form/Event</TableHead>
                <TableHead>Act</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <ComplianceRow key={item.id} item={item} />
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
