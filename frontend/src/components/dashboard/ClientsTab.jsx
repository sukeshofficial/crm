import { Search, MoreVertical } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Dummy data
const clients = [
  {
    id: 1,
    name: "ACP & SK Ltd",
    fileNo: "12/7",
    package: "GST Package",
    price: null,
    users: [],
  },
  {
    id: 2,
    name: "Anil Sharma",
    fileNo: "A1344",
    package: "GST Package",
    price: "₹1,200.00",
    users: ["https://github.com/shadcn.png"],
  },
  {
    id: 3,
    name: "Ashok",
    fileNo: "A1",
    package: "",
    price: "₹1,500.00",
    users: [],
  },
  {
    id: 4,
    name: "Auto Prime",
    fileNo: "001",
    package: "",
    price: null,
    users: ["https://ui-avatars.com/api/?name=Auto+Prime"],
  },
  {
    id: 5,
    name: "CA KISHORE K REDDY",
    fileNo: "",
    package: "",
    price: null,
    users: [],
  },
  {
    id: 6,
    name: "CITY SERVICE PROVIDERS PRIVATE LIMITED",
    fileNo: "",
    package: "",
    price: null,
    users: [],
  },
  {
    id: 7,
    name: "DIST RURAL DEVELOPMENT AGENCY",
    fileNo: "",
    package: "",
    price: null,
    users: ["https://ui-avatars.com/api/?name=D"],
  },
  { id: 8, name: "EFORCE", fileNo: "", package: "", price: null, users: [] },
  {
    id: 9,
    name: "GST Client",
    fileNo: "",
    package: "",
    price: null,
    users: [],
  },
  {
    id: 10,
    name: "Hitesh Gupta",
    fileNo: "CYM-954",
    package: "",
    price: null,
    users: [],
  },
  {
    id: 11,
    name: "Jai Motors",
    fileNo: "",
    package: "",
    price: null,
    users: ["https://ui-avatars.com/api/?name=J"],
  },
  {
    id: 12,
    name: "Karan",
    fileNo: "CYM-434",
    package: "GST Package",
    price: null,
    users: ["https://ui-avatars.com/api/?name=K"],
  },
];

export function ClientsTab() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      {/* Header Actions */}
      <div className="p-4 flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-gray-100">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="search"
            placeholder="Search"
            className="w-full h-10 pl-9 pr-4 rounded-lg border border-gray-200 bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm"
          />
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
            + Assign to Clients
          </button>
          <button className="flex-1 sm:flex-none px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg text-sm font-medium transition-colors">
            Bulk Action
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50/50 text-gray-500 font-medium border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 w-12">
                <Checkbox />
              </th>
              <th className="px-6 py-4">CLIENTS</th>
              <th className="px-6 py-4">FILE NO.</th>
              <th className="px-6 py-4">PACKAGE</th>
              <th className="px-6 py-4">CUSTOM PRICE</th>
              <th className="px-6 py-4">CUSTOM USERS</th>
              <th className="px-6 py-4 w-12"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {clients.map((client) => (
              <tr
                key={client.id}
                className="hover:bg-gray-50/50 transition-colors group"
              >
                <td className="px-6 py-4">
                  <Checkbox />
                </td>
                <td className="px-6 py-4 font-medium text-gray-900">
                  {client.name}
                </td>
                <td className="px-6 py-4 text-gray-500">{client.fileNo}</td>
                <td className="px-6 py-4 text-gray-500">{client.package}</td>
                <td className="px-6 py-4 text-gray-500">{client.price}</td>
                <td className="px-6 py-4">
                  <div className="flex -space-x-2">
                    {client.users.map((url, i) => (
                      <Avatar key={i} className="w-8 h-8 border-2 border-white">
                        <AvatarImage src={url} />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-gray-600">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
