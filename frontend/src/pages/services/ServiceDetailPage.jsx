import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { TabsContent } from "../../components/ui/tabs"
import { ServiceDetailHeader } from "../../components/services/detail/ServiceDetailHeader"
import { ServiceTabsNav } from "../../components/services/detail/ServiceTabsNav"
import { ServiceSettingsTab } from "../../components/services/detail/ServiceSettingsTab"
import { ServiceChecklistTab } from "../../components/services/detail/ServiceChecklistTab"
import { ServiceSubtasksTab } from "../../components/services/detail/ServiceSubtasksTab"
import { ServiceCustomFieldsTab } from "../../components/services/detail/ServiceCustomFieldsTab"
import { ServiceClientsTab } from "../../components/services/detail/ServiceClientsTab"
import { ServiceFilesTab } from "../../components/services/detail/ServiceFilesTab"
import { mockServiceDetails } from "../../mock/mockServiceDetails"

export function ServiceDetailPage() {
    const { serviceId } = useParams()
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState("settings")

    const serviceData = mockServiceDetails[parseInt(serviceId)]

    useEffect(() => {
        if (!serviceData) {
            navigate("/services")
        }
    }, [serviceData, navigate])

    if (!serviceData) {
        return null
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto p-6">
                <ServiceDetailHeader serviceName={serviceData.name} serviceId={serviceData.id} />

                <ServiceTabsNav
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    clientsCount={serviceData.clientsCount}
                >
                    <TabsContent value="settings" className="mt-6">
                        <ServiceSettingsTab serviceData={serviceData} />
                    </TabsContent>

                    <TabsContent value="checklist" className="mt-6">
                        <ServiceChecklistTab />
                    </TabsContent>

                    <TabsContent value="subtasks" className="mt-6">
                        <ServiceSubtasksTab />
                    </TabsContent>

                    <TabsContent value="custom-fields" className="mt-6">
                        <ServiceCustomFieldsTab />
                    </TabsContent>

                    <TabsContent value="clients" className="mt-6">
                        <ServiceClientsTab />
                    </TabsContent>

                    <TabsContent value="supporting-files" className="mt-6">
                        <ServiceFilesTab />
                    </TabsContent>
                </ServiceTabsNav>
            </div>
        </div>
    )
}
