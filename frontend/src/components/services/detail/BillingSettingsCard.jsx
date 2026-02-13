import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card"
import { Label } from "../../ui/label"
import { Input } from "../../ui/input"
import { Switch } from "../../ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select"
import { gstPercentageOptions } from "../../../mock/mockServiceDetails"

export function BillingSettingsCard({ serviceData }) {
    const [formData, setFormData] = useState({
        sacCode: serviceData.sacCode,
        gstPercentage: serviceData.gstPercentage,
        defaultBillingRate: serviceData.defaultBillingRate,
        markTasksBillable: serviceData.markTasksBillable
    })

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    const handleSave = () => {
        console.log("Saving Billing Settings:", formData)
    }

    return (
        <Card className="rounded-xl">
            <CardHeader>
                <CardTitle>Billing Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="sacCode">SAC Code</Label>
                    <Input
                        id="sacCode"
                        value={formData.sacCode}
                        onChange={(e) => handleChange("sacCode", e.target.value)}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="gstPercentage">GST %</Label>
                    <Select value={formData.gstPercentage} onValueChange={(value) => handleChange("gstPercentage", value)}>
                        <SelectTrigger id="gstPercentage">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {gstPercentageOptions.map(option => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="defaultBillingRate">Default Billing Rate (Exc of Tax)</Label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
                        <Input
                            id="defaultBillingRate"
                            type="number"
                            className="pl-8"
                            value={formData.defaultBillingRate}
                            onChange={(e) => handleChange("defaultBillingRate", parseInt(e.target.value))}
                        />
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <Switch
                        id="markTasksBillable"
                        checked={formData.markTasksBillable}
                        onCheckedChange={(checked) => handleChange("markTasksBillable", checked)}
                    />
                    <Label htmlFor="markTasksBillable" className="cursor-pointer">
                        Mark tasks billable by default
                    </Label>
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
