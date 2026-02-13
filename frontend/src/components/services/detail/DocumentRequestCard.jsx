import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card"
import { Label } from "../../ui/label"
import { Switch } from "../../ui/switch"
import { Textarea } from "../../ui/textarea"

export function DocumentRequestCard({ serviceData }) {
    const [formData, setFormData] = useState({
        createDocCollection: serviceData.createDocCollection,
        docCollectionMessage: serviceData.docCollectionMessage
    })

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    const handleSave = () => {
        console.log("Saving Document Collection:", formData)
    }

    return (
        <Card className="rounded-xl">
            <CardHeader>
                <CardTitle>Document Collection Request</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-center space-x-2">
                    <Switch
                        id="createDocCollection"
                        checked={formData.createDocCollection}
                        onCheckedChange={(checked) => handleChange("createDocCollection", checked)}
                    />
                    <Label htmlFor="createDocCollection" className="cursor-pointer">
                        Create Document Collection Request Automatically
                    </Label>
                </div>

                {formData.createDocCollection && (
                    <div className="space-y-2">
                        <Label htmlFor="docCollectionMessage">
                            Doc. Collection Request Default Message <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                            id="docCollectionMessage"
                            rows={4}
                            value={formData.docCollectionMessage}
                            onChange={(e) => handleChange("docCollectionMessage", e.target.value)}
                        />
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
