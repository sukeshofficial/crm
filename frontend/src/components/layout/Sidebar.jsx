import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  CheckSquare,
  ListTodo,
  Users,
  Package,
  FileText,
  Receipt,
  FileStack,
  Wallet,
  Calendar,
  FileCheck,
  BarChart3,
  UserCog,
  Bell,
  Settings,
  Globe,
} from "lucide-react"

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: CheckSquare, label: "Tasks" },
  { icon: ListTodo, label: "To-Do" },
  { icon: Users, label: "Clients" },
  { icon: Package, label: "Client Packages", badge: "New" },
  { icon: FileText, label: "Services & Packages" },
  { icon: FileStack, label: "Invoices" },
  { icon: Receipt, label: "Receipts" },
  { icon: FileText, label: "Quotations" },
  { icon: Wallet, label: "Expenses" },
  { icon: Calendar, label: "Attendance" },
  { icon: FileCheck, label: "Documents & DSC" },
  { icon: BarChart3, label: "Reports" },
  { icon: UserCog, label: "Users" },
  { icon: Bell, label: "Send Notifications" },
  { icon: Settings, label: "Settings" },
  { icon: Globe, label: "Your Website" },
]

export function Sidebar({ collapsed = false }) {
  return (
    <aside
      className={cn(
        "flex flex-col border-r border-gray-200 bg-white transition-all",
        collapsed ? "w-16" : "w-56"
      )}
    >
      <div className="flex h-14 items-center gap-2 border-b border-gray-200 px-4">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
          P
        </div>
        {!collapsed && (
          <span className="font-semibold text-gray-900">Practive</span>
        )}
      </div>
      <nav className="flex-1 overflow-y-auto p-2">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.label}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                item.active
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              )}
            >
              <Icon className="h-5 w-5 shrink-0" />
              {!collapsed && (
                <>
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.badge && (
                    <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[10px] font-medium text-blue-700">
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
