import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card"
import { Label } from "../../ui/label"
import { Input } from "../../ui/input"
import { Switch } from "../../ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select"
import { Info, X } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table"
import { frequencyOptions, creationDateOptions, dueDateOptions, scheduleExampleData } from "../../../mock/mockServiceDetails"
import { mockUsers } from "../../../mock/mockUsers"

export function BasicDetailsCard({ serviceData }) {
    const [formData, setFormData] = useState({
        name: serviceData.name,
        isEnabled: serviceData.isEnabled,
        isChecklistRequired: serviceData.isChecklistRequired,
        isRecurring: serviceData.isRecurring,
        autoTaskFrequency: serviceData.autoTaskFrequency,
        creationDate: serviceData.creationDate,
        dueDate: serviceData.dueDate,
        targetDateDays: serviceData.targetDateDays,
        taskCreationPeriod: serviceData.taskCreationPeriod,
        assignAutoTasks: serviceData.assignAutoTasks,
        assignedUsers: serviceData.assignedUsers
    })

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    const handleAddUser = (userId) => {
        const userIdNum = parseInt(userId)
        if (!formData.assignedUsers.includes(userIdNum)) {
            handleChange("assignedUsers", [...formData.assignedUsers, userIdNum])
        }
    }

    const handleRemoveUser = (userId) => {
        handleChange("assignedUsers", formData.assignedUsers.filter(id => id !== userId))
    }

    const handleSave = () => {
        console.log("Saving Basic Details:", formData)
    }

    const getSelectedUsers = () => {
        return mockUsers.filter(user => formData.assignedUsers.includes(user.id))
    }

    return (
        <Card className="rounded-xl">
            <CardHeader>
                <CardTitle>Basic Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="serviceName">
                        Service Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="serviceName"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                    />
                </div>

                <div className="flex items-center justify-between gap-8">
                    <div className="flex items-center space-x-2">
                        <Switch
                            id="isEnabled"
                            checked={formData.isEnabled}
                            onCheckedChange={(checked) => handleChange("isEnabled", checked)}
                        />
                        <Label htmlFor="isEnabled" className="cursor-pointer">Is Enabled</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Switch
                            id="isChecklistRequired"
                            checked={formData.isChecklistRequired}
                            onCheckedChange={(checked) => handleChange("isChecklistRequired", checked)}
                        />
                        <Label htmlFor="isChecklistRequired" className="cursor-pointer">
                            Checklist Completion Required
                        </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Switch
                            id="isRecurring"
                            checked={formData.isRecurring}
                            onCheckedChange={(checked) => handleChange("isRecurring", checked)}
                        />
                        <Label htmlFor="isRecurring" className="cursor-pointer">Is Recurring</Label>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="autoTaskFrequency">
                        Auto Task Creation Frequency <span className="text-red-500">*</span>
                    </Label>
                    <Select value={formData.autoTaskFrequency} onValueChange={(value) => handleChange("autoTaskFrequency", value)}>
                        <SelectTrigger id="autoTaskFrequency">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {frequencyOptions.map(option => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="creationDate">
                        Creation Date <span className="text-red-500">*</span>
                    </Label>
                    <Select value={formData.creationDate} onValueChange={(value) => handleChange("creationDate", value)}>
                        <SelectTrigger id="creationDate">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {creationDateOptions.map(option => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="dueDate">
                        Due Date <span className="text-red-500">*</span>
                    </Label>
                    <Select value={formData.dueDate} onValueChange={(value) => handleChange("dueDate", value)}>
                        <SelectTrigger id="dueDate">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {dueDateOptions.map(option => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label>Target Date</Label>
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground">{formData.creationDate}</span>
                        <span className="text-sm text-muted-foreground">+</span>
                        <Input
                            type="number"
                            className="w-24"
                            value={formData.targetDateDays}
                            onChange={(e) => handleChange("targetDateDays", parseInt(e.target.value))}
                        />
                        <span className="text-sm text-muted-foreground">Days</span>
                    </div>
                </div>

                <div className="flex gap-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <Info className="h-4 w-4 text-blue-600 shrink-0" />
                    <p className="text-sm text-blue-900">
                        Kindly note that all tasks will be scheduled for future dates exclusively. This means that tasks can only be created for tomorrow or subsequent days. Tasks for today's date or past days cannot be generated.
                    </p>
                </div>

                <div className="space-y-3">
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <input
                                type="radio"
                                id="recently-completed"
                                name="taskCreationPeriod"
                                value="recently-completed"
                                checked={formData.taskCreationPeriod === "recently-completed"}
                                onChange={(e) => handleChange("taskCreationPeriod", e.target.value)}
                                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <Label htmlFor="recently-completed" className="cursor-pointer font-normal">
                                Create tasks for the Recently Completed Period
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="radio"
                                id="currently-running"
                                name="taskCreationPeriod"
                                value="currently-running"
                                checked={formData.taskCreationPeriod === "currently-running"}
                                onChange={(e) => handleChange("taskCreationPeriod", e.target.value)}
                                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <Label htmlFor="currently-running" className="cursor-pointer font-normal">
                                Create tasks for the Currently Running Period
                            </Label>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
                    <h4 className="text-sm font-medium mb-3">Example Schedule</h4>
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-amber-100 hover:bg-amber-100">
                                <TableHead className="font-semibold">Task</TableHead>
                                <TableHead className="font-semibold">Creation Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {scheduleExampleData.map((row, index) => (
                                <TableRow key={index} className="bg-white">
                                    <TableCell>{row.task}</TableCell>
                                    <TableCell>{row.creationDate}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <Switch
                            id="assignAutoTasks"
                            checked={formData.assignAutoTasks}
                            onCheckedChange={(checked) => handleChange("assignAutoTasks", checked)}
                        />
                        <Label htmlFor="assignAutoTasks" className="cursor-pointer">
                            Assign Auto Tasks to Users of Respective Clients
                        </Label>
                    </div>

                    {formData.assignAutoTasks && (
                        <div className="space-y-2 pl-6">
                            <Label htmlFor="assignedUsers">Assigned Users</Label>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {getSelectedUsers().map((user) => (
                                    <div key={user.id} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm flex items-center gap-2">
                                        {user.name}
                                        <button
                                            onClick={() => handleRemoveUser(user.id)}
                                            className="text-blue-900 hover:text-blue-950"
                                        >
                                            <X className="w-3 h-3" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <Select onValueChange={handleAddUser}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select users to assign" />
                                </SelectTrigger>
                                <SelectContent>
                                    {mockUsers.map(user => (
                                        <SelectItem key={user.id} value={user.id.toString()}>
                                            {user.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    )}
                </div>

                <button
                    onClick={handleSave}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                >
                    Save
                </button>
            </CardContent>
        </Card>
    )
}
