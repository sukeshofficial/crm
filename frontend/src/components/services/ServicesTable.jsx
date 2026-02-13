import { Card } from "@/components/ui/card"
import {
    Table,
    TableHeader,
    TableBody,
    TableHead,
    TableRow,
} from "@/components/ui/table"
import { ServiceRow } from "./ServiceRow"

export function ServicesTable({ services }) {
    return (
        <Card className="overflow-hidden">
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader className="bg-gray-50 sticky top-0">
                        <TableRow>
                            <TableHead className="font-semibold text-gray-700">SERVICE</TableHead>
                            <TableHead className="font-semibold text-gray-700">RECURRING</TableHead>
                            <TableHead className="font-semibold text-gray-700">ASSIGNED CLIENTS</TableHead>
                            <TableHead className="font-semibold text-gray-700">STATUS</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {services.length === 0 ? (
                            <TableRow>
                                <td colSpan="4" className="text-center py-8 text-gray-500">
                                    No services found
                                </td>
                            </TableRow>
                        ) : (
                            services.map((service) => <ServiceRow key={service.id} service={service} />)
                        )}
                    </TableBody>
                </Table>
            </div>
        </Card>
    )
}
