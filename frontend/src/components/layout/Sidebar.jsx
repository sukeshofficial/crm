import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
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
  CalendarCheck,
  FileCheck,
  BarChart3,
  UserCog,
  Bell,
  Settings,
  Globe,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: CheckSquare, label: "Tasks", path: "/tasks" },
  { icon: ListTodo, label: "To-Do", path: "/to-do" },
  { icon: Users, label: "Clients", path: "/clients" },
  {
    icon: Package,
    label: "Client Packages",
    path: "/client-packages",
    badge: "New",
  },
  { icon: FileText, label: "Services & Packages", path: "/services" },
  { icon: FileStack, label: "Invoices", path: "/invoices" },
  { icon: Receipt, label: "Receipts", path: "/receipts" },
  { icon: FileText, label: "Quotations", path: "/quotations" },
  { icon: Wallet, label: "Expenses", path: "/expenses" },
  { icon: Calendar, label: "Attendance", path: "/attendance" },
  {
    icon: CalendarCheck,
    label: "Compliance Calendar",
    path: "/compliance-calendar",
  },
  { icon: FileCheck, label: "Documents & DSC", path: "/documents" },
  { icon: BarChart3, label: "Reports", path: "/reports" },
  { icon: UserCog, label: "Users", path: "/users" },
  { icon: Bell, label: "Send Notifications", path: "/notifications" },
  { icon: Settings, label: "Settings", path: "/settings" },
  { icon: Globe, label: "Your Website", path: "/website" },
];

export function Sidebar({ collapsed = false }) {
  const location = useLocation();

  return (
    <aside
      className={cn(
        "flex flex-col border-r border-gray-200 bg-white transition-all",
        collapsed ? "w-16" : "w-56",
      )}
    >
      <Link
        to="/"
        className="flex h-14 items-center gap-2 border-b border-gray-200 px-4"
      >
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
          FG
        </div>
        {!collapsed && (
          <span className="font-semibold text-gray-900">ForgeGrid</span>
        )}
      </Link>
      <nav className="flex-1 overflow-y-auto p-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
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
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
