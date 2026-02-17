import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PackagesTable } from "@/components/packages/PackagesTable";

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
        <PackagesTable />
      </TabsContent>
    </Tabs>
  );
}
