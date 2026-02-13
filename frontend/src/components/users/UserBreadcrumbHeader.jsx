import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

export function UserBreadcrumbHeader() {
    const navigate = useNavigate()

    return (
        <div className="flex items-center gap-3 mb-6">
            <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/users")}
                className="h-9 w-9"
            >
                <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2 text-sm">
                <button
                    onClick={() => navigate("/users")}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                    Users
                </button>
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <span className="text-gray-900 font-medium">New User</span>
            </div>
        </div>
    )
}
