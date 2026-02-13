import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Sidebar } from "@/components/layout/Sidebar"
import { Header } from "@/components/layout/Header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, ChevronRight } from "lucide-react"

export function NewServicePage() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        serviceName: "",
        recurringType: "",
        description: "",
        isActive: true,
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form Data:", formData)
        navigate("/services")
    }

    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">
            <Sidebar />
            <div className="flex flex-1 flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-y-auto p-4 md:p-6">
                    <div className="mx-auto max-w-[800px]">
                        <div className="flex items-center gap-3 mb-6">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => navigate("/services")}
                                className="h-9 w-9"
                            >
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                            <div className="flex items-center gap-2 text-sm">
                                <button
                                    onClick={() => navigate("/services")}
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    Services
                                </button>
                                <ChevronRight className="h-4 w-4 text-gray-400" />
                                <span className="text-gray-900 font-medium">New Service</span>
                            </div>
                        </div>
                        <Card className="p-6 md:p-8 rounded-xl shadow-sm">
                            <form onSubmit={handleSubmit}>
                                <div className="space-y-5">
                                    <div className="space-y-2">
                                        <Label htmlFor="serviceName">
                                            Service Name <span className="text-red-500">*</span>
                                        </Label>
                                        <Input
                                            id="serviceName"
                                            value={formData.serviceName}
                                            onChange={(e) =>
                                                setFormData({ ...formData, serviceName: e.target.value })
                                            }
                                            placeholder="Enter service name"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="recurringType">
                                            Recurring Type <span className="text-red-500">*</span>
                                        </Label>
                                        <Select
                                            value={formData.recurringType}
                                            onValueChange={(value) =>
                                                setFormData({ ...formData, recurringType: value })
                                            }
                                            required
                                        >
                                            <SelectTrigger id="recurringType">
                                                <SelectValue placeholder="Select recurring type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Monthly">Monthly</SelectItem>
                                                <SelectItem value="Quarterly">Quarterly</SelectItem>
                                                <SelectItem value="Half-Yearly">Half-Yearly</SelectItem>
                                                <SelectItem value="Yearly">Yearly</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="description">Description</Label>
                                        <Textarea
                                            id="description"
                                            value={formData.description}
                                            onChange={(e) =>
                                                setFormData({ ...formData, description: e.target.value })
                                            }
                                            placeholder="Enter service description"
                                            rows={4}
                                        />
                                    </div>

                                    <div className="flex items-center justify-between py-2">
                                        <Label htmlFor="isActive">Is Active?</Label>
                                        <Switch
                                            id="isActive"
                                            checked={formData.isActive}
                                            onCheckedChange={(checked) =>
                                                setFormData({ ...formData, isActive: checked })
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-end gap-3 mt-8 pt-6 border-t">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => navigate("/services")}
                                    >
                                        Cancel
                                    </Button>
                                    <Button type="submit">Save</Button>
                                </div>
                            </form>
                        </Card>
                    </div>
                </main>
            </div>
        </div>
    )
}
