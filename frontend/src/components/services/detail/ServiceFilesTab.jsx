import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card"

export function ServiceFilesTab() {
    return (
        <Card className="rounded-xl">
            <CardHeader>
                <CardTitle>Supporting Files</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground text-center py-8">
                    Supporting files will be displayed here
                </p>
            </CardContent>
        </Card>
    )
}
