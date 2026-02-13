import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card"

export function ServiceSubtasksTab() {
    return (
        <Card className="rounded-xl">
            <CardHeader>
                <CardTitle>Subtasks Configuration</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground text-center py-8">
                    Subtasks configuration will be displayed here
                </p>
            </CardContent>
        </Card>
    )
}
