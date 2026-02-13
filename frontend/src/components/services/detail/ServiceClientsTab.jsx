import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card"

export function ServiceClientsTab() {
    return (
        <Card className="rounded-xl">
            <CardHeader>
                <CardTitle>Assigned Clients</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground text-center py-8">
                    Assigned clients list will be displayed here
                </p>
            </CardContent>
        </Card>
    )
}
