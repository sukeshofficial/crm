import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card"

export function ServiceChecklistTab() {
    return (
        <Card className="rounded-xl">
            <CardHeader>
                <CardTitle>Checklist Configuration</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground text-center py-8">
                    Checklist configuration will be displayed here
                </p>
            </CardContent>
        </Card>
    )
}
