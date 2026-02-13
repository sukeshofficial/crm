import {
  TableCell,
  TableRow,
} from "@/components/ui/table"
import { DueDateBadge } from "./DueDateBadge"
import { ActBadge } from "./ActBadge"

export function ComplianceRow({ item }) {
  return (
    <TableRow>
      <TableCell className="w-[120px] py-4">
        <DueDateBadge day={item.day} monthLabel={item.monthLabel} />
      </TableCell>
      <TableCell className="py-4">
        <div>
          <p className="font-medium text-gray-900">{item.form}</p>
          <p className="text-xs text-gray-500">{item.formSubtitle}</p>
        </div>
      </TableCell>
      <TableCell className="py-4">
        <ActBadge act={item.act} />
      </TableCell>
      <TableCell className="py-4 text-sm text-gray-500">
        {item.description}
      </TableCell>
    </TableRow>
  )
}
