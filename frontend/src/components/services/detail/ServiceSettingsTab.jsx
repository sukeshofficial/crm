import { BasicDetailsCard } from "./BasicDetailsCard"
import { BillingSettingsCard } from "./BillingSettingsCard"
import { GstApiCard } from "./GstApiCard"
import { DocumentRequestCard } from "./DocumentRequestCard"

export function ServiceSettingsTab({ serviceData }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
                <BasicDetailsCard serviceData={serviceData} />
            </div>
            <div className="space-y-6">
                <BillingSettingsCard serviceData={serviceData} />
                <GstApiCard serviceData={serviceData} />
                <DocumentRequestCard serviceData={serviceData} />
            </div>
        </div>
    )
}
