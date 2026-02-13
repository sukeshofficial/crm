import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { usefulLinks } from "@/data/mockData"

export function UsefulLinksCard() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-medium">Useful Links</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="divide-y divide-dotted divide-gray-200 rounded-md border border-gray-100">
          {usefulLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                className="flex w-full cursor-pointer items-center justify-between px-4 py-2.5 text-left text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600"
              >
                <span>{link.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

