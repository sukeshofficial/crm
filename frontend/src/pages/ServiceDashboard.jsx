import { useState } from "react";
import { ArrowLeft, Trash2, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { ChecklistTab } from "@/components/dashboard/ChecklistTab";
import { SubtasksTab } from "@/components/dashboard/SubtasksTab";
import { ClientsTab } from "@/components/dashboard/ClientsTab";
import { cn } from "@/lib/utils";

export function ServiceDashboard() {
  const [activeTab, setActiveTab] = useState("checklist");
  const [collapsed, setCollapsed] = useState(false);

  const tabs = [
    { id: "settings", label: "Settings" },
    { id: "checklist", label: "Checklist" },
    { id: "subtasks", label: "Subtasks" },
    { id: "custom-fields", label: "Custom Fields" },
    { id: "clients", label: "Clients", badge: "16" },
    { id: "supporting-files", label: "Supporting Files" },
  ];

  return (
    <div className="min-h-screen bg-[#f7f9fb] flex">
      <Sidebar collapsed={collapsed} />

      <div className="flex-1 flex flex-col min-w-0">
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />

        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Top Bar with Breadcrumbs and Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-500">
                <Link
                  to="/services"
                  className="hover:text-gray-900 transition-colors"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Link>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Link
                    to="/services"
                    className="hover:text-blue-600 text-blue-600"
                  >
                    Services
                  </Link>
                  <span>&gt;</span>
                  <span className="text-gray-900">GST-3B (M)</span>
                </div>
              </div>

              <button className="flex items-center gap-2 px-4 py-2 bg-pink-50 text-pink-600 hover:bg-pink-100 rounded-lg text-sm font-medium transition-colors">
                <Trash2 className="h-4 w-4" />
                Delete
              </button>
            </div>

            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <div className="flex gap-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "pb-3 text-sm font-medium relative transition-colors",
                      activeTab === tab.id
                        ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
                        : "text-gray-500 hover:text-gray-700",
                    )}
                  >
                    {tab.label}
                    {tab.badge && (
                      <span className="ml-2 px-2 py-0.5 rounded-full bg-blue-100 text-blue-600 text-xs font-bold">
                        {tab.badge}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              {activeTab === "checklist" && <ChecklistTab />}
              {activeTab === "subtasks" && <SubtasksTab />}
              {activeTab === "clients" && <ClientsTab />}
              {["settings", "custom-fields", "supporting-files"].includes(
                activeTab,
              ) && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center text-gray-500">
                  <div className="flex justify-center mb-4">
                    <Info className="h-10 w-10 text-gray-300" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Content Not Implemented
                  </h3>
                  <p>
                    This tab is part of the UI demo but has no specific content
                    requirements yet.
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
