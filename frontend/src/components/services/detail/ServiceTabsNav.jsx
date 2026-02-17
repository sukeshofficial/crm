import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { Badge } from "../../ui/badge";

export function ServiceTabsNav({
  activeTab,
  onTabChange,
  clientsCount,
  children,
}) {
  const tabs = [
    { id: "settings", label: "Settings" },
    { id: "checklist", label: "Checklist" },
    { id: "subtasks", label: "Subtasks" },
    { id: "custom-fields", label: "Custom Fields" },
    {
      id: "clients",
      label: "Clients",
      badge: clientsCount,
      badgeColor: "bg-blue-500",
    },
    { id: "supporting-files", label: "Supporting Files" },
  ];

  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
      <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent gap-6">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
            className="rounded-none border-b-2 border-transparent px-2 py-3 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=inactive]:text-gray-500 data-[state=active]:bg-transparent transition-all"
          >
            {tab.label}
            {tab.badge !== undefined && (
              <Badge
                className={`ml-2 rounded-full px-2 text-[10px] h-5 ${tab.id === activeTab ? "bg-blue-600" : "bg-blue-500"} hover:bg-blue-600`}
              >
                {tab.badge}
              </Badge>
            )}
          </TabsTrigger>
        ))}
      </TabsList>

      {children}
    </Tabs>
  );
}
