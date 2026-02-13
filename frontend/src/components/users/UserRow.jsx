import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { TableRow, TableCell } from "@/components/ui/table"

export function UserRow({ user }) {
    const getInitials = (name) => {
        return name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
            .slice(0, 2)
    }

    return (
        <TableRow className="hover:bg-gray-50">
            <TableCell>
                <Avatar className="h-10 w-10">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                </Avatar>
            </TableCell>
            <TableCell>
                <span className="font-medium text-blue-600 cursor-pointer hover:underline">
                    {user.name}
                </span>
            </TableCell>
            <TableCell>
                <span className="text-gray-600">{user.role}</span>
            </TableCell>
            <TableCell>
                <span className="font-mono text-sm text-gray-500">{user.username}</span>
            </TableCell>
            <TableCell>
                <span className="text-gray-600">{user.mobile}</span>
            </TableCell>
            <TableCell>
                <span className="text-gray-600">{user.email}</span>
            </TableCell>
            <TableCell>
                <Badge
                    variant={user.status === "Active" ? "default" : "secondary"}
                    className={
                        user.status === "Active"
                            ? "bg-green-100 text-green-700 hover:bg-green-100"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-100"
                    }
                >
                    {user.status}
                </Badge>
            </TableCell>
        </TableRow>
    )
}
