import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Info, X } from "lucide-react";
import { mockUsers } from "@/mock/mockUsers";

export function ServiceSettingsTab({ serviceData }) {
  const [settings, setSettings] = useState({
    name: "GST-3B (M)",
    isEnabled: true,
    isChecklistRequired: false,
    isRecurring: true,
    autoTaskFrequency: "Monthly",
    creationDate: "1st",
    dueDate: "11th",
    targetDateDays: "",
    taskCreationPeriod: "recently-completed",
    assignAutoTasks: false,
    assignedUsers: [],
    sacCode: "123432",
    gstPercentage: "18%",
    defaultBillingRate: 500,
    markTasksBillable: true,
    checkGSTStatus: true,
    gstReturnType: "GSTR3B",
    createDocCollection: true,
    docCollectionMessage: "Abcd",
  });

  useEffect(() => {
    if (serviceData) {
      setSettings((prev) => ({
        ...prev,
        name: serviceData.name || prev.name,
        // Map other props if available in real app
      }));
    }
  }, [serviceData]);

  const handleSave = () => {
    console.log("Saving service settings:", settings);
  };

  const toggleUserAssignment = (userId) => {
    setSettings((prev) => {
      const currentUsers = prev.assignedUsers;
      if (currentUsers.includes(userId)) {
        return {
          ...prev,
          assignedUsers: currentUsers.filter((id) => id !== userId),
        };
      } else {
        return { ...prev, assignedUsers: [...currentUsers, userId] };
      }
    });
  };

  const removeUser = (userId) => {
    setSettings((prev) => ({
      ...prev,
      assignedUsers: prev.assignedUsers.filter((id) => id !== userId),
    }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left Column - Basic Details & Scheduler */}
      <div className="space-y-6">
        <Card className="rounded-xl border shadow-sm bg-white">
          <CardHeader className="border-b px-6 py-4">
            <CardTitle className="text-lg font-medium">Basic Details</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="service-name" className="text-gray-700">
                Service Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="service-name"
                value={settings.name}
                onChange={(e) =>
                  setSettings({ ...settings, name: e.target.value })
                }
                className="bg-white"
              />
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Switch
                  checked={settings.isEnabled}
                  onCheckedChange={(checked) =>
                    setSettings({ ...settings, isEnabled: checked })
                  }
                  className="data-[state=checked]:bg-blue-600"
                />
                <Label className="text-gray-700">Is Enabled?</Label>
              </div>
              <div className="flex items-center gap-2">
                <Switch
                  checked={settings.isChecklistRequired}
                  onCheckedChange={(checked) =>
                    setSettings({ ...settings, isChecklistRequired: checked })
                  }
                  className="data-[state=checked]:bg-blue-600"
                />
                <Label className="text-gray-700">
                  Is Checklist Completion Required?{" "}
                  <Info className="inline w-3 h-3 text-gray-400" />
                </Label>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Switch
                checked={settings.isRecurring}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, isRecurring: checked })
                }
                className="data-[state=checked]:bg-blue-600"
              />
              <Label className="text-gray-700">Is Recurring?</Label>
            </div>

            <div className="space-y-2">
              <Label className="text-gray-700">
                Auto Task Creation Frequency{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Select
                value={settings.autoTaskFrequency}
                onValueChange={(val) =>
                  setSettings({ ...settings, autoTaskFrequency: val })
                }
              >
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Select Frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Monthly">Monthly</SelectItem>
                  <SelectItem value="Quarterly">Quarterly</SelectItem>
                  <SelectItem value="Yearly">Yearly</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-gray-700">
                  Creation Date <span className="text-red-500">*</span>
                </Label>
                <div className="flex items-center gap-2">
                  <Select
                    value={settings.creationDate}
                    onValueChange={(val) =>
                      setSettings({ ...settings, creationDate: val })
                    }
                  >
                    <SelectTrigger className="bg-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1st">1st</SelectItem>
                      <SelectItem value="5th">5th</SelectItem>
                      <SelectItem value="10th">10th</SelectItem>
                    </SelectContent>
                  </Select>
                  <span className="text-sm text-gray-500 whitespace-nowrap">
                    of every month
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-gray-700">
                  Due Date <span className="text-red-500">*</span>
                </Label>
                <div className="flex items-center gap-2">
                  <Select
                    value={settings.dueDate}
                    onValueChange={(val) =>
                      setSettings({ ...settings, dueDate: val })
                    }
                  >
                    <SelectTrigger className="bg-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="11th">11th</SelectItem>
                      <SelectItem value="15th">15th</SelectItem>
                      <SelectItem value="20th">20th</SelectItem>
                    </SelectContent>
                  </Select>
                  <span className="text-sm text-gray-500 whitespace-nowrap">
                    of every month
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-gray-700">Target Date</Label>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Creation Date + </span>
                <Input
                  className="w-20 bg-white"
                  value={settings.targetDateDays}
                  onChange={(e) =>
                    setSettings({ ...settings, targetDateDays: e.target.value })
                  }
                />
                <span className="text-sm text-gray-600">Days</span>
              </div>
            </div>

            <div className="bg-cyan-50 border border-cyan-100 p-4 rounded-lg text-sm text-cyan-800">
              Kindly note that all tasks will be scheduled for future dates
              exclusively. This means that tasks can only be created for
              tomorrow or subsequent days. Tasks for today's date or past days
              cannot be generated.
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-2">
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center cursor-pointer ${settings.taskCreationPeriod === "recently-completed" ? "border-blue-600" : "border-gray-300"}`}
                  onClick={() =>
                    setSettings({
                      ...settings,
                      taskCreationPeriod: "recently-completed",
                    })
                  }
                >
                  {settings.taskCreationPeriod === "recently-completed" && (
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                  )}
                </div>
                <Label
                  className="cursor-pointer font-normal text-gray-700"
                  onClick={() =>
                    setSettings({
                      ...settings,
                      taskCreationPeriod: "recently-completed",
                    })
                  }
                >
                  Create Tasks for the Recently Completed Period
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center cursor-pointer ${settings.taskCreationPeriod === "currently-running" ? "border-blue-600" : "border-gray-300"}`}
                  onClick={() =>
                    setSettings({
                      ...settings,
                      taskCreationPeriod: "currently-running",
                    })
                  }
                >
                  {settings.taskCreationPeriod === "currently-running" && (
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                  )}
                </div>
                <Label
                  className="cursor-pointer font-normal text-gray-700"
                  onClick={() =>
                    setSettings({
                      ...settings,
                      taskCreationPeriod: "currently-running",
                    })
                  }
                >
                  Create Tasks for the Currently Running Period
                </Label>
              </div>
            </div>

            {/* Example Table */}
            <div className="bg-amber-50/50 rounded-lg p-4 border border-amber-100">
              <p className="font-medium text-amber-800 mb-2">Example</p>
              <div className="text-sm">
                <div className="grid grid-cols-2 font-medium text-gray-700 mb-1">
                  <div>Task</div>
                  <div>Creation Date</div>
                </div>
                <div className="grid grid-cols-2 text-gray-600 py-1 border-t border-amber-100">
                  <div>May - 2025</div>
                  <div>01-06-2025</div>
                </div>
                <div className="grid grid-cols-2 text-gray-600 py-1 border-t border-amber-100">
                  <div>Jun - 2025</div>
                  <div>01-07-2025</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t space-y-4">
              <div className="flex items-center gap-2">
                <Switch
                  checked={settings.assignAutoTasks}
                  onCheckedChange={(checked) =>
                    setSettings({ ...settings, assignAutoTasks: checked })
                  }
                  className="data-[state=checked]:bg-blue-600"
                />
                <Label className="text-gray-700">
                  Assign Auto Tasks to Users of Respective Clients
                </Label>
              </div>

              <div className="space-y-2">
                <Label className="text-gray-700">
                  Assign Auto Tasks to (Users)
                </Label>
                <div className="relative">
                  <Select onValueChange={toggleUserAssignment}>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Select Users" />
                    </SelectTrigger>
                    <SelectContent>
                      {mockUsers.map((user) => (
                        <SelectItem key={user.id} value={user.id.toString()}>
                          {user.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {settings.assignedUsers.map((userId) => {
                    const user = mockUsers.find(
                      (u) => u.id.toString() === userId.toString(),
                    );
                    if (!user) return null;
                    return (
                      <div
                        key={userId}
                        className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-sm text-gray-700"
                      >
                        {user.name}
                        <X
                          className="w-3 h-3 cursor-pointer hover:text-red-500"
                          onClick={() => removeUser(userId)}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Button
          onClick={handleSave}
          className="bg-blue-600 hover:bg-blue-700 px-8"
        >
          Save
        </Button>
      </div>

      {/* Right Column - Billing, GST, Docs */}
      <div className="space-y-6">
        <Card className="rounded-xl border shadow-sm bg-white">
          <CardHeader className="border-b px-6 py-4">
            <CardTitle className="text-lg font-medium">
              Billing Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-gray-700">SAC Code</Label>
                <Input
                  value={settings.sacCode}
                  onChange={(e) =>
                    setSettings({ ...settings, sacCode: e.target.value })
                  }
                  className="bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-gray-700">
                  GST % <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={settings.gstPercentage}
                  onValueChange={(val) =>
                    setSettings({ ...settings, gstPercentage: val })
                  }
                >
                  <SelectTrigger className="bg-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0%">0%</SelectItem>
                    <SelectItem value="5%">5%</SelectItem>
                    <SelectItem value="12%">12%</SelectItem>
                    <SelectItem value="18%">18%</SelectItem>
                    <SelectItem value="28%">28%</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-gray-700">
                Default Billing Rate (Excl. of Tax)
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  ₹
                </span>
                <Input
                  value={settings.defaultBillingRate}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      defaultBillingRate: e.target.value,
                    })
                  }
                  className="bg-white pl-8"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Switch
                checked={settings.markTasksBillable}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, markTasksBillable: checked })
                }
                className="data-[state=checked]:bg-blue-600"
              />
              <Label className="text-gray-700">
                Mark its tasks billable by default
              </Label>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl border shadow-sm bg-white">
          <CardHeader className="border-b px-6 py-4">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                <span className="font-bold text-xs">GST</span>
              </div>
              GST API Config.
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="flex items-center gap-2">
              <Switch
                checked={settings.checkGSTStatus}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, checkGSTStatus: checked })
                }
                className="data-[state=checked]:bg-blue-600"
              />
              <Label className="text-gray-700">
                Check GST return filing status from GST Server{" "}
                <Info className="inline w-3 h-3 text-gray-400" />
              </Label>
            </div>
            <div className="space-y-2">
              <Label className="text-gray-700">
                GST Return Type <span className="text-red-500">*</span>
              </Label>
              <Select
                value={settings.gstReturnType}
                onValueChange={(val) =>
                  setSettings({ ...settings, gstReturnType: val })
                }
              >
                <SelectTrigger className="bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="GSTR1">GSTR1</SelectItem>
                  <SelectItem value="GSTR3B">GSTR3B</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl border shadow-sm bg-white">
          <CardHeader className="border-b px-6 py-4">
            <CardTitle className="text-lg font-medium">
              Document Collection Request
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="flex items-center gap-2">
              <Switch
                checked={settings.createDocCollection}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, createDocCollection: checked })
                }
                className="data-[state=checked]:bg-blue-600"
              />
              <Label className="text-gray-700">
                Create Document Collection Request Automatically?
              </Label>
            </div>

            <div className="space-y-2">
              <Label className="text-gray-700">
                Doc. Collection Request Default Message{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Textarea
                value={settings.docCollectionMessage}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    docCollectionMessage: e.target.value,
                  })
                }
                className="bg-white min-h-[100px]"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
