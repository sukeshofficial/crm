import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const dummyRoles = [
  {
    id: 1,
    name: "Account Executive",
    assignedUsers: [],
  },
  {
    id: 2,
    name: "Accountant",
    assignedUsers: [
      { name: "User 1", avatar: "https://github.com/shadcn.png" },
      { name: "User 2", avatar: null },
      { name: "User 3", avatar: null },
    ],
  },
  {
    id: 3,
    name: "Admin",
    assignedUsers: [
      { name: "User 4", avatar: null },
      { name: "User 5", avatar: null },
    ],
  },
  {
    id: 4,
    name: "Billing Department",
    assignedUsers: [],
  },
  {
    id: 5,
    name: "Employee",
    assignedUsers: [],
  },
  {
    id: 6,
    name: "Staff",
    assignedUsers: [{ name: "User 6", avatar: null }],
  },
  {
    id: 7,
    name: "Team Leader",
    assignedUsers: [{ name: "User 7", avatar: null }],
  },
];

export function UserRolesPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRoles = dummyRoles.filter((role) =>
    role.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Button>
          <h1 className="text-xl font-semibold text-gray-800">User Roles</h1>
        </div>
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white"
          onClick={() => navigate("/settings/roles/new")}
        >
          <Plus className="mr-2 h-4 w-4" /> New
        </Button>
      </div>

      {/* Search & List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 min-h-[500px]">
        <div className="mb-6 relative w-full border-b border-gray-100 pb-6">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search..."
            className="pl-9 bg-white border-gray-200 w-full max-w-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <Table>
          <TableBody>
            <TableRow className="hover:bg-transparent border-none">
              <TableCell className="font-medium text-xs text-gray-500 uppercase tracking-wider pl-0 pb-4">
                NAME
              </TableCell>
              <TableCell className="font-medium text-xs text-gray-500 uppercase tracking-wider text-right pb-4">
                ASSIGNED USERS
              </TableCell>
            </TableRow>
            {filteredRoles.map((role) => (
              <TableRow
                key={role.id}
                className="hover:bg-gray-50 border-b border-gray-50 last:border-0"
              >
                <TableCell className="py-4 pl-0">
                  <Link
                    to={`/settings/roles/${role.id}/edit`}
                    className="text-blue-500 hover:underline font-medium"
                  >
                    {role.name}
                  </Link>
                </TableCell>
                <TableCell className="text-right py-4">
                  <div className="flex justify-end -space-x-2">
                    {role.assignedUsers.map((user, i) => (
                      <Avatar
                        key={i}
                        className="h-8 w-8 border-2 border-white ring-0"
                      >
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback className="text-xs bg-gray-500 text-white">
                          {user.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
