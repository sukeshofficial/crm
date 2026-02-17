import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Image as ImageIcon,
  Pencil,
  Search,
  Plus,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";

export function NewClientPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    isActive: true,
    name: "",
    fileNo: "",
    type: "",
    group: "",
    pan: "",
    gstin: "",
    contactPerson: "",
    dob: "",
    mobile: "",
    secondaryMobile: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
    hasOpeningBalance: false,
    openingBalance: "",
  });

  const [services, setServices] = useState([
    { name: "Abcd Loan", enabled: false },
    { name: "Accounting", enabled: false },
    { name: "Advance Tax", enabled: false },
    { name: "Audit Yearly", enabled: false },
    { name: "Client Visit", enabled: false },
    { name: "CMP-08", enabled: false },
    { name: "Consultancy", enabled: false },
    { name: "CP Quarter", enabled: false },
  ]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSwitchChange = (checked, field) => {
    setFormData((prev) => ({ ...prev, [field]: checked }));
  };

  const handleServiceToggle = (index) => {
    const newServices = [...services];
    newServices[index].enabled = !newServices[index].enabled;
    setServices(newServices);
  };

  const handleSave = () => {
    const payload = {
      ...formData,
      services: services.filter((s) => s.enabled),
    };
    console.log("Saving new client:", payload);
    // Add logic to save to backend here
    navigate("/clients");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Button>
          <div className="flex items-center gap-2 text-gray-600">
            <span
              className="cursor-pointer hover:text-gray-900"
              onClick={() => navigate("/clients")}
            >
              Clients
            </span>
            <span className="text-gray-400">&gt;</span>
            <span className="font-semibold text-gray-900">New Client</span>
          </div>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="mr-2 h-4 w-4" /> Autofill Using GSTIN
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column - Basic Details */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Basic Details
          </h2>
          <div className="flex flex-col gap-6">
            {/* Photo Upload */}
            <div className="flex flex-col items-center">
              <div className="h-32 w-32 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200">
                <ImageIcon className="h-8 w-8 text-gray-300" />
              </div>
              <Button
                variant="outline"
                size="icon"
                className="mt-[-16px] rounded-full h-8 w-8 bg-white shadow-sm"
              >
                <Pencil className="h-4 w-4 text-gray-600" />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Label htmlFor="isActive" className="text-gray-600">
                Is Active?
              </Label>
              <Switch
                id="isActive"
                checked={formData.isActive}
                onCheckedChange={(c) => handleSwitchChange(c, "isActive")}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-xs text-gray-500">
                  Client Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-white border-gray-200"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="fileNo" className="text-xs text-gray-500">
                  File No.
                </Label>
                <Input
                  id="fileNo"
                  value={formData.fileNo}
                  onChange={handleInputChange}
                  className="bg-white border-gray-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className="text-xs text-gray-500">
                  Type <span className="text-red-500">*</span>
                </Label>
                <Select
                  onValueChange={(val) =>
                    setFormData({ ...formData, type: val })
                  }
                >
                  <SelectTrigger className="bg-white border-gray-200">
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Individual</SelectItem>
                    <SelectItem value="proprietor">Sole Proprietor</SelectItem>
                    <SelectItem value="partnership">
                      Partnership Firm
                    </SelectItem>
                    <SelectItem value="private">Private Limited</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs text-gray-500">Select Group</Label>
                <Select
                  onValueChange={(val) =>
                    setFormData({ ...formData, group: val })
                  }
                >
                  <SelectTrigger className="bg-white border-gray-200">
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="group1">Group 1</SelectItem>
                    <SelectItem value="group2">Group 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="pan" className="text-xs text-gray-500">
                  PAN
                </Label>
                <Input
                  id="pan"
                  value={formData.pan}
                  onChange={handleInputChange}
                  className="bg-white border-gray-200"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="gstin" className="text-xs text-gray-500">
                  GSTIN
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="gstin"
                    value={formData.gstin}
                    onChange={handleInputChange}
                    className="bg-white border-gray-200"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 bg-blue-50 border-blue-100 text-blue-600 hover:bg-blue-100"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label
                  htmlFor="contactPerson"
                  className="text-xs text-gray-500"
                >
                  Contact Person Name
                </Label>
                <Input
                  id="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  className="bg-white border-gray-200"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="dob" className="text-xs text-gray-500">
                  Date of Birth
                </Label>
                <Input
                  id="dob"
                  type="date"
                  value={formData.dob}
                  onChange={handleInputChange}
                  className="bg-white border-gray-200"
                />
              </div>
            </div>

            {/* Placeholders for Users and Tags dropdowns */}
            <div className="space-y-1.5">
              <Label className="text-xs text-gray-500">Users</Label>
              <Select>
                <SelectTrigger className="bg-white border-gray-200">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="user1">User 1</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs text-gray-500">Tags</Label>
              <Select>
                <SelectTrigger className="bg-white border-gray-200">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tag1">Tag 1</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {/* Contact Details */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              Contact Details
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="mobile" className="text-xs text-gray-500">
                    Mobile No.
                  </Label>
                  <Input
                    id="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="bg-white border-gray-200"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="secondaryMobile"
                    className="text-xs text-gray-500"
                  >
                    Secondary Mobile No.
                  </Label>
                  <Input
                    id="secondaryMobile"
                    value={formData.secondaryMobile}
                    onChange={handleInputChange}
                    className="bg-white border-gray-200"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-xs text-gray-500">
                  Email
                </Label>
                <Input
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white border-gray-200"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="address" className="text-xs text-gray-500">
                  Address
                </Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="bg-white border-gray-200 min-h-[80px]"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="city" className="text-xs text-gray-500">
                    City
                  </Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="bg-white border-gray-200"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="pincode" className="text-xs text-gray-500">
                    Pincode
                  </Label>
                  <Input
                    id="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className="bg-white border-gray-200"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs text-gray-500">State</Label>
                  <Select
                    onValueChange={(val) =>
                      setFormData({ ...formData, state: val })
                    }
                  >
                    <SelectTrigger className="bg-white border-gray-200">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="state1">State 1</SelectItem>
                      <SelectItem value="state2">State 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Balance */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              Opening Balance
            </h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Label
                  htmlFor="hasOpeningBalance"
                  className="text-sm text-gray-600"
                >
                  Set Opening Balance
                </Label>
                <Switch
                  id="hasOpeningBalance"
                  checked={formData.hasOpeningBalance}
                  onCheckedChange={(c) =>
                    handleSwitchChange(c, "hasOpeningBalance")
                  }
                />
              </div>
              {formData.hasOpeningBalance && (
                <Input
                  placeholder="Amount"
                  value={formData.openingBalance}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      openingBalance: e.target.value,
                    })
                  }
                  className="w-32 bg-white border-gray-200"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Recurring Services */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Recurring Services
          </h2>
          <div className="space-y-0">
            <div className="flex justify-between items-center py-2 text-xs font-medium text-gray-500">
              <span>SERVICE</span>
              <span>ENABLE</span>
            </div>
            {services.map((service, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-3 border-t border-gray-100"
              >
                <span className="text-sm text-gray-700">{service.name}</span>
                <Switch
                  checked={service.enabled}
                  onCheckedChange={() => handleServiceToggle(index)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Custom Fields */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Custom Fields
          </h2>
          <div className="space-y-4">
            {[
              "Bank Details",
              "CIN No.",
              "Contact No.",
              "DIN No.",
              "Doc. Link",
            ].map((field) => (
              <div key={field} className="space-y-1.5">
                <Label className="text-xs text-gray-500">{field}</Label>
                <Input className="bg-white border-gray-200" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 flex justify-end">
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white min-w-[100px]"
          onClick={handleSave}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
