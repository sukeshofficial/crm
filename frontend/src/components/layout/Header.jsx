import { Search, Bell, HelpCircle, ChevronDown, Clock } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Header() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4">
      <div className="flex items-center gap-4">
        <span className="font-semibold text-gray-900 md:hidden">Practive</span>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Q Search Clients"
            className="h-9 w-64 rounded-lg border border-gray-200 bg-gray-50 pl-9 pr-3 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="hidden text-sm text-gray-600 sm:inline">
          Mative Pvt Ltd
        </span>
        <button className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100">
          What&apos;s new
        </button>
        <button className="relative rounded-lg p-2 text-gray-500 hover:bg-gray-100">
          <Clock className="h-5 w-5" />
        </button>
        <button className="relative rounded-lg p-2 text-gray-500 hover:bg-gray-100">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
            1
          </span>
        </button>
        <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100">
          <HelpCircle className="h-5 w-5" />
        </button>
        <button className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-gray-100">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="text-xs">A</AvatarFallback>
          </Avatar>
          <span className="hidden text-sm font-medium text-gray-700 sm:inline">
            Admin
          </span>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </button>
      </div>
    </header>
  );
}
