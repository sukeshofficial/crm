import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card"
import { Label } from "../../ui/label"
import { Switch } from "../../ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select"
import { gstReturnTypeOptions } from "../../../mock/mockServiceDetails"

export function GstApiCard({ serviceData }) {
    const [formData, setFormData] = useState({
        checkGSTStatus: serviceData.checkGSTStatus,
        gstReturnType: serviceData.gstReturnType
    })

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    const handleSave = () => {
        console.log("Saving GST API Config:", formData)
    }

    return (
        <Card className="rounded-xl">
            <CardHeader>
                <CardTitle>GST API Config.</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-center space-x-2">
                    <Switch
                        id="checkGSTStatus"
                        checked={formData.checkGSTStatus}
                        onCheckedChange={(checked) => handleChange("checkGSTStatus", checked)}
                    />
                    <Label htmlFor="checkGSTStatus" className="cursor-pointer">
                        Check GST return filing status from GST Server
                    </Label>
                </div>

                {formData.checkGSTStatus && (
                    <div className="space-y-2">
                        <Label htmlFor="gstReturnType">
                            GST Return Type <span className="text-red-500">*</span>
                        </Label>
                        <Select value={formData.gstReturnType} onValueChange={(value) => handleChange("gstReturnType", value)}>
                            <SelectTrigger id="gstReturnType">
                                <SelectValue placeholder="Select GST return type" />
                            </SelectTrigger>
                            <SelectContent>
                                {gstReturnTypeOptions.map(option => (
                                    <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                )}

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
