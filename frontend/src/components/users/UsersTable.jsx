import { Card } from "@/components/ui/card"
import {
    Table,
    TableHeader,
    TableBody,
    TableHead,
    TableRow,
} from "@/components/ui/table"
import { UserRow } from "./UserRow"

export function UsersTable({ users }) {
    return (
        <Card className="overflow-hidden">
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader className="bg-gray-50">
                        <TableRow>
                            <TableHead className="font-semibold text-gray-700">PHOTO</TableHead>
                            <TableHead className="font-semibold text-gray-700">NAME</TableHead>
                            <TableHead className="font-semibold text-gray-700">ROLE</TableHead>
                            <TableHead className="font-semibold text-gray-700">USERNAME</TableHead>
                            <TableHead className="font-semibold text-gray-700">MOBILE</TableHead>
                            <TableHead className="font-semibold text-gray-700">EMAIL</TableHead>
                            <TableHead className="font-semibold text-gray-700">STATUS</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.length === 0 ? (
                            <TableRow>
                                <td colSpan="7" className="text-center py-8 text-gray-500">
                                    No users found
                                </td>
                            </TableRow>
                        ) : (
                            users.map((user) => <UserRow key={user.id} user={user} />)
                        )}
                    </TableBody>
                </Table>
            </div>
        </Card>
    )
}
