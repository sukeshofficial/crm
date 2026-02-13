import { useState, useMemo } from "react"
import { Sidebar } from "@/components/layout/Sidebar"
import { Header } from "@/components/layout/Header"
import { ServicesHeader } from "@/components/services/ServicesHeader"
import { ServicesTabs } from "@/components/services/ServicesTabs"
import { ServicesSearch } from "@/components/services/ServicesSearch"
import { ServicesTable } from "@/components/services/ServicesTable"
import { ImportServicesModal } from "@/components/services/ImportServicesModal"
import { mockServices } from "@/mock/mockServices"

export function ServicesPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [isImportModalOpen, setIsImportModalOpen] = useState(false)

    const filteredServices = useMemo(() => {
        if (!searchTerm) return mockServices

        const lowercasedSearch = searchTerm.toLowerCase()
        return mockServices.filter(
            (service) =>
                service.name.toLowerCase().includes(lowercasedSearch) ||
                service.recurring.toLowerCase().includes(lowercasedSearch)
        )
    }, [searchTerm])

    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">
            <Sidebar />
            <div className="flex flex-1 flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-y-auto p-4 md:p-6">
                    <div className="mx-auto max-w-[1600px]">
                        <ServicesHeader onImportClick={() => setIsImportModalOpen(true)} />
                        <ServicesTabs>
                            <ServicesSearch
                                searchTerm={searchTerm}
                                onSearchChange={setSearchTerm}
                            />
                            <ServicesTable services={filteredServices} />
                        </ServicesTabs>
                    </div>
                </main>
            </div>
            <ImportServicesModal
                open={isImportModalOpen}
                onOpenChange={setIsImportModalOpen}
            />
        </div>
    )
}
