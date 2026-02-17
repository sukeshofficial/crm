import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { settingsOptions } from "../components/settings/settingsOptions";
import { SettingsCard } from "../components/settings/SettingsCard";

export function SettingsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="rounded-full p-1 text-gray-600 hover:bg-gray-200"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
        </div>

        {/* Settings Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {settingsOptions.map((option) => (
            <SettingsCard key={option.title} {...option} />
          ))}
        </div>
      </div>
    </div>
  );
}
