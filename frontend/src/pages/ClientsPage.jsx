import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ChevronRight,
  MoreVertical,
  Phone,
  Plus,
  RefreshCcw,
  Search,
  Settings,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Checkbox } from "../components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";

// Dummy Data
const clientsData = [
  {
    id: 1,
    fileNo: "12/7",
    name: "ACP & SK Ltd",
    type: "Trust",
    mobile: null,
    group: "",
    tags: [{ label: "Moderate", color: "bg-green-100 text-green-700" }],
    status: "Active",
    users: [],
    avatar: null,
  },
  {
    id: 2,
    fileNo: "A1344",
    name: "Anil Sharma",
    type: "Sole Proprietor",
    mobile: "9024570899",
    group: "",
    tags: [{ label: "Moderate", color: "bg-green-100 text-green-700" }],
    status: "Active",
    users: [
      { name: "User 1", avatar: null },
      { name: "User 2", avatar: null },
      { name: "User 3", avatar: null },
    ],
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 3,
    fileNo: "A2",
    name: "Aone Traders",
    type: "Sole Proprietor",
    mobile: "9024570899",
    group: "Rahul",
    tags: [],
    status: "Active",
    users: [],
    avatar: null,
  },
  {
    id: 4,
    fileNo: "a/2 4",
    name: "ARCHBEES",
    type: "Sole Proprietor",
    mobile: null,
    group: "Rahul",
    tags: [],
    status: "Active",
    users: [],
    avatar: null,
  },
  {
    id: 5,
    fileNo: "A1",
    name: "Ashok",
    type: "Partnership Firm",
    mobile: "9024570899",
    group: "Rahul",
    tags: [
      { label: "ITR Client", color: "bg-purple-100 text-purple-700" },
      { label: "+1", color: "bg-gray-100 text-gray-600" },
    ],
    status: "Active",
    users: [{ name: "User 1", avatar: "https://github.com/shadcn.png" }],
    avatar: null,
  },
  {
    id: 6,
    fileNo: "dd /2",
    name: "ASHWANI KUMAR",
    type: "Individual",
    mobile: "9024570899",
    group: "Dave Dentist",
    tags: [
      { label: "ITR Client", color: "bg-purple-100 text-purple-700" },
      { label: "+1", color: "bg-gray-100 text-gray-600" },
    ],
    status: "Active",
    users: [],
    avatar: null,
  },
  {
    id: 7,
    fileNo: "001",
    name: "Auto Prime",
    type: "Private Limited",
    mobile: "9024570899",
    group: "",
    tags: [
      { label: "ITR Client", color: "bg-purple-100 text-purple-700" },
      { label: "+1", color: "bg-gray-100 text-gray-600" },
    ],
    status: "Active",
    users: [{ name: "User M", avatar: null }],
    avatar: null, // Should be yellow icon in screenshot context, using partial logic
  },
  {
    id: 8,
    fileNo: "",
    name: "Bharti Airtel Limited",
    type: "Limited Company",
    mobile: null,
    group: "",
    tags: [],
    status: "Active",
    users: [],
    avatar: null,
  },
  {
    id: 9,
    fileNo: "",
    name: "CA KISHORE K REDDY",
    type: "Individual",
    mobile: "9024570899",
    group: "",
    tags: [],
    status: "Active",
    users: [],
    avatar: null,
  },
  {
    id: 10,
    fileNo: "101",
    name: "Zomato Ltd",
    type: "Limited Company",
    mobile: "9876543210",
    group: "Corporate",
    tags: [{ label: "High Value", color: "bg-blue-100 text-blue-700" }],
    status: "Active",
    users: [],
    avatar: null,
  },
];

export function ClientsPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClients = clientsData.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.fileNo.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Button>
          <h1 className="text-xl font-semibold text-gray-800">Clients</h1>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 border-none"
          >
            Import
          </Button>
          <Button
            variant="outline"
            className="bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 border-none"
          >
            Export
          </Button>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => navigate("/clients/new")}
          >
            <Plus className="mr-2 h-4 w-4" /> New
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-1 flex-wrap items-center gap-4">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Client, File No., Contact Person, Mobile, Email, PAN, GST"
              className="pl-9 bg-white border-gray-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select>
            <SelectTrigger className="w-[180px] bg-white border-gray-200">
              <SelectValue placeholder="Recurring Service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gst">GST</SelectItem>
              <SelectItem value="it">Income Tax</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px] bg-white border-gray-200">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="individual">Individual</SelectItem>
              <SelectItem value="company">Company</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9 bg-white border-gray-200"
          >
            <Plus className="h-4 w-4 text-gray-500" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9 bg-white border-gray-200"
          >
            <RefreshCcw className="h-4 w-4 text-gray-500" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9 bg-white border-gray-200"
          >
            <ChevronRight className="h-4 w-4 text-gray-500" />
          </Button>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50/50">
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox />
              </TableHead>
              <TableHead className="w-[80px]">PHOTO</TableHead>
              <TableHead>FILE NO.</TableHead>
              <TableHead>NAME</TableHead>
              <TableHead>TYPE</TableHead>
              <TableHead>MOBILE</TableHead>
              <TableHead>GROUP</TableHead>
              <TableHead>TAGS</TableHead>
              <TableHead>STATUS</TableHead>
              <TableHead>USERS</TableHead>
              <TableHead className="w-[50px] text-right">
                <Settings className="h-4 w-4 text-gray-500 ml-auto cursor-pointer" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredClients.map((client) => (
              <TableRow key={client.id} className="hover:bg-gray-50">
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <Avatar className="h-9 w-9 bg-gray-100">
                    <AvatarImage src={client.avatar} />
                    <AvatarFallback className="text-gray-500 bg-gray-200">
                      {client.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium text-gray-600">
                  {client.fileNo}
                </TableCell>
                <TableCell>
                  <Link
                    to={`/clients/${client.id}`}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    {client.name}
                  </Link>
                </TableCell>
                <TableCell className="text-gray-600">{client.type}</TableCell>
                <TableCell>
                  {client.mobile && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <span>{client.mobile}</span>
                      <Phone className="h-3 w-3 text-green-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500 flex items-center justify-center text-[8px] text-white">
                        W
                      </div>
                    </div>
                  )}
                </TableCell>
                <TableCell className="text-gray-600">{client.group}</TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    {client.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        className={`rounded-full px-2 py-0.5 text-[10px] font-normal border-0 hover:bg-opacity-80 ${tag.color}`}
                      >
                        {tag.label}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-green-600 text-sm font-medium">
                    {client.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex -space-x-2">
                    {client.users.map((user, i) => (
                      <Avatar
                        key={i}
                        className="h-6 w-6 border-2 border-white ring-0"
                      >
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback className="text-[9px] bg-gray-700 text-white">
                          {user.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4 text-gray-500" />
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
