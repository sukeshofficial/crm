import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

export function PackagesTable() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Dummy Data as per requirements
  const packagesData = [
    {
      id: "1",
      name: "GST Package",
      frequency: "Yearly",
      billingAmount: "₹12000",
      servicesCount: 8,
      clientsCount: 3,
    },
    {
      id: "2",
      name: "Audit Package",
      frequency: "Monthly",
      billingAmount: "₹5000",
      servicesCount: 5,
      clientsCount: 6,
    },
    {
      id: "3",
      name: "Tax Filing Package",
      frequency: "Quarterly",
      billingAmount: "₹8000",
      servicesCount: 4,
      clientsCount: 2,
    },
  ];

  const filteredPackages = packagesData.filter((pkg) =>
    pkg.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-4">
      <div className="relative w-full sm:w-72">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search packages"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-9 bg-white"
        />
      </div>

      <Card className="rounded-xl border shadow-sm bg-white overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50/50 hover:bg-gray-50/50">
              <TableHead className="font-semibold text-gray-600 bg-gray-50/50">
                PACKAGE NAME
              </TableHead>
              <TableHead className="font-semibold text-gray-600 bg-gray-50/50">
                FREQUENCY
              </TableHead>
              <TableHead className="font-semibold text-gray-600 bg-gray-50/50">
                DEFAULT BILLING AMOUNT
              </TableHead>
              <TableHead className="font-semibold text-gray-600 bg-gray-50/50 text-center">
                SERVICES COUNT
              </TableHead>
              <TableHead className="font-semibold text-gray-600 bg-gray-50/50 text-center">
                ASSIGNED CLIENTS COUNT
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPackages.length > 0 ? (
              filteredPackages.map((pkg) => (
                <TableRow
                  key={pkg.id}
                  className="hover:bg-gray-50 cursor-pointer transition-colors group"
                  onClick={() => navigate(`/packages/${pkg.id}`)}
                >
                  <TableCell className="font-medium">
                    <span className="text-blue-600 hover:underline">
                      {pkg.name}
                    </span>
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {pkg.frequency}
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {pkg.billingAmount}
                  </TableCell>
                  <TableCell className="text-center text-gray-600">
                    {pkg.servicesCount}
                  </TableCell>
                  <TableCell className="text-center text-gray-600">
                    {pkg.clientsCount}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="h-24 text-center text-gray-500"
                >
                  No packages found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
