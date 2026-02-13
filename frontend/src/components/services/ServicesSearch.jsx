import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function ServicesSearch({ searchTerm, onSearchChange }) {
    return (
        <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
                type="search"
                placeholder="Search services"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-9"
            />
        </div>
    )
}
