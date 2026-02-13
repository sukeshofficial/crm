import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ServicesTabs({ children }) {
    return (
        <Tabs defaultValue="services" className="w-full">
            <TabsList className="mb-6">
                <TabsTrigger value="services">Services</TabsTrigger>
                <TabsTrigger value="packages">Packages</TabsTrigger>
            </TabsList>
            <TabsContent value="services" className="mt-0">
                {children}
            </TabsContent>
            <TabsContent value="packages" className="mt-0">
                <div className="text-center py-12 text-gray-500">
                    Packages content coming soon
                </div>
            </TabsContent>
        </Tabs>
    )
}
