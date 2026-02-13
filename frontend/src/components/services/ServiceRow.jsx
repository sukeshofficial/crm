import { Badge } from "@/components/ui/badge"
import { TableRow, TableCell } from "@/components/ui/table"
import { useNavigate } from "react-router-dom"

export function ServiceRow({ service }) {
    const navigate = useNavigate()

    const handleRowClick = () => {
        navigate(`/services/${service.id}`)
    }

    return (
        <TableRow className="hover:bg-gray-50 cursor-pointer" onClick={handleRowClick}>
            <TableCell>
                <span className="font-medium text-blue-600 hover:underline">
                    {service.name}
                </span>
            </TableCell>
            <TableCell>
                <span className="text-gray-600">{service.recurring}</span>
            </TableCell>
            <TableCell>
                <span className="text-gray-600">{service.assignedClients}</span>
            </TableCell>
            <TableCell>
                <Badge
                    variant={service.status === "Active" ? "default" : "secondary"}
                    className={
                        service.status === "Active"
                            ? "bg-green-100 text-green-700 hover:bg-green-100"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-100"
                    }
                >
                    {service.status}
                </Badge>
            </TableCell>
        </TableRow>
    )
}
