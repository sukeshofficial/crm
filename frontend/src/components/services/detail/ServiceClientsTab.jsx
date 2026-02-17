import { useState } from "react";
import { Search, Plus, MoreVertical } from "lucide-react";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Checkbox } from "../../ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";

export function ServiceClientsTab() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClients, setSelectedClients] = useState([]);

  // Mock data matching screenshot
  const clientsData = [
    {
      id: "1",
      name: "ACP & SK Ltd",
      fileNo: "12/7",
      package: "GST Package",
      price: null,
      users: [],
    },
    {
      id: "2",
      name: "Anil Sharma",
      fileNo: "A1344",
      package: "GST Package",
      price: "1,200.00",
      users: [{ name: "User 1", avatar: "/avatars/01.png" }],
    },
    {
      id: "3",
      name: "Ashok",
      fileNo: "A1",
      package: "GST Package",
      price: "1,500.00",
      users: [],
    },
    {
      id: "4",
      name: "Auto Prime",
      fileNo: "001",
      package: null,
      price: null,
      users: [{ name: "User 2", avatar: "/avatars/02.png" }],
    },
    {
      id: "5",
      name: "CA KISHORE K REDDY",
      fileNo: "",
      package: null,
      price: null,
      users: [],
    },
    {
      id: "6",
      name: "CITY SERVICE PROVIDERS PRIVATE LIMITED",
      fileNo: "",
      package: null,
      price: null,
      users: [],
    },
    {
      id: "7",
      name: "DIST RURAL DEVELOPMENT AGENCY",
      fileNo: "",
      package: null,
      price: null,
      users: [],
    },
    {
      id: "8",
      name: "EFORCE",
      fileNo: "",
      package: null,
      price: null,
      users: [{ name: "User 3", avatar: "/avatars/03.png" }],
    },
    {
      id: "9",
      name: "GST Client",
      fileNo: "",
      package: null,
      price: null,
      users: [],
    },
    {
      id: "10",
      name: "Hitesh Gupta",
      fileNo: "CYM-954",
      package: null,
      price: null,
      users: [],
    },
    {
      id: "11",
      name: "Jai Motors",
      fileNo: "",
      package: null,
      price: null,
      users: [{ name: "User 4", avatar: "/avatars/04.png" }],
    },
    {
      id: "12",
      name: "Karan",
      fileNo: "CYM-434",
      package: "GST Package",
      price: null,
      users: [{ name: "User 5", avatar: "/avatars/05.png" }],
    },
    {
      id: "13",
      name: "Madhav Dave",
      fileNo: "A987",
      package: null,
      price: null,
      users: [{ name: "User 6", avatar: "/avatars/06.png" }],
    },
    {
      id: "14",
      name: "Mohan Singh",
      fileNo: "A456",
      package: null,
      price: null,
      users: [{ name: "User 7", avatar: "/avatars/07.png" }],
    },
  ];

  const filteredClients = clientsData.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const toggleSelectAll = () => {
    if (selectedClients.length === filteredClients.length) {
      setSelectedClients([]);
    } else {
      setSelectedClients(filteredClients.map((c) => c.id));
    }
  };

  const toggleSelectClient = (id) => {
    if (selectedClients.includes(id)) {
      setSelectedClients(selectedClients.filter((cId) => cId !== id));
    } else {
      setSelectedClients([...selectedClients, id]);
    }
  };

  const handleBulkAction = () => {
    const names = clientsData
      .filter((c) => selectedClients.includes(c.id))
      .map((c) => c.name)
      .join(", ");
    alert(`Selected clients for bulk action: ${names}`);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl border shadow-sm">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search Clients"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Button
            variant="outline"
            onClick={handleBulkAction}
            className="flex-1 sm:flex-none text-blue-600 border-blue-200 hover:bg-blue-50"
            disabled={selectedClients.length === 0}
          >
            Bulk Action
          </Button>
          <Button className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Assign to Clients
          </Button>
        </div>
      </div>

      <div className="rounded-xl border shadow-sm bg-white overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50/50">
              <TableHead className="w-[50px]">
                <Checkbox
                  checked={
                    filteredClients.length > 0 &&
                    selectedClients.length === filteredClients.length
                  }
                  onCheckedChange={toggleSelectAll}
                />
              </TableHead>
              <TableHead className="font-medium">CLIENTS</TableHead>
              <TableHead className="font-medium">FILE NO.</TableHead>
              <TableHead className="font-medium">PACKAGE</TableHead>
              <TableHead className="font-medium">CUSTOM PRICE</TableHead>
              <TableHead className="font-medium">CUSTOM USERS</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredClients.map((client) => (
              <TableRow key={client.id} className="hover:bg-gray-50/50">
                <TableCell>
                  <Checkbox
                    checked={selectedClients.includes(client.id)}
                    onCheckedChange={() => toggleSelectClient(client.id)}
                  />
                </TableCell>
                <TableCell className="font-medium">{client.name}</TableCell>
                <TableCell>{client.fileNo}</TableCell>
                <TableCell>{client.package}</TableCell>
                <TableCell>{client.price ? `₹${client.price}` : ""}</TableCell>
                <TableCell>
                  <div className="flex -space-x-2">
                    {client.users.map((user, i) => (
                      <Avatar key={i} className="w-6 h-6 border-2 border-white">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback className="text-[10px] bg-blue-100 text-blue-600">
                          {user.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-gray-400"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
