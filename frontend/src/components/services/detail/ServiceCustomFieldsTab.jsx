import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card"

export function ServiceCustomFieldsTab() {
    return (
        <Card className="rounded-xl">
            <CardHeader>
                <CardTitle>Custom Fields Configuration</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground text-center py-8">
                    Custom fields configuration will be displayed here
                </p>
            </CardContent>
        </Card>
    )
}
