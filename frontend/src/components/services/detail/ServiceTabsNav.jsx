import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs"
import { Badge } from "../../ui/badge"

export function ServiceTabsNav({ activeTab, onTabChange, clientsCount, children }) {
    return (
        <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                <TabsTrigger
                    value="settings"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
                >
                    Settings
                </TabsTrigger>
                <TabsTrigger
                    value="checklist"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
                >
                    Checklist
                </TabsTrigger>
                <TabsTrigger
                    value="subtasks"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
                >
                    Subtasks
                </TabsTrigger>
                <TabsTrigger
                    value="custom-fields"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
                >
                    Custom Fields
                </TabsTrigger>
                <TabsTrigger
                    value="clients"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
                >
                    Clients
                    <Badge className="ml-2 bg-blue-600">{clientsCount}</Badge>
                </TabsTrigger>
                <TabsTrigger
                    value="supporting-files"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
                >
                    Supporting Files
                </TabsTrigger>
            </TabsList>

            {children}
        </Tabs>
    )
}
