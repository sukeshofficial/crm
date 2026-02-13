import { Button } from "@/components/ui/button"
import { ArrowLeft, Plus, Upload } from "lucide-react"
import { useNavigate } from "react-router-dom"

export function ServicesHeader({ onImportClick }) {
    const navigate = useNavigate()

    return (
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => navigate(-1)}
                    className="h-9 w-9"
                >
                    <ArrowLeft className="h-5 w-5" />
                </Button>
                <h1 className="text-2xl font-semibold text-gray-900">Services</h1>
            </div>
            <div className="flex items-center gap-3">
                <Button variant="outline" onClick={onImportClick}>
                    <Upload className="h-4 w-4 mr-2" />
                    Import
                </Button>
                <Button onClick={() => navigate("/services/new")}>
                    <Plus className="h-4 w-4 mr-2" />
                    New
                </Button>
            </div>
        </div>
    )
}
