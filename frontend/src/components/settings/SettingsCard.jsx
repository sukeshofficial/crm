import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

export function SettingsCard({
  title,
  description,
  icon: Icon,
  iconBgColor,
  iconColor,
  route,
}) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(route)}
      className="flex cursor-pointer items-start gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
    >
      <div
        className={cn(
          "flex h-14 w-14 shrink-0 items-center justify-center rounded-lg",
          iconBgColor,
          iconColor,
        )}
      >
        <Icon className="h-7 w-7" />
      </div>
      <div>
        <h3 className="mb-1 text-base font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
