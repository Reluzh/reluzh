
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardList } from "lucide-react";

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <header className="py-4 text-center"> {/* Updated classes */}
        <h1 className="text-2xl font-bold text-foreground">My Orders</h1>
      </header>
      <Card className="text-center">
        <CardHeader>
          <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
            <ClipboardList className="h-10 w-10 text-primary" />
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <CardTitle className="text-xl">No Orders Yet</CardTitle>
          <p className="text-muted-foreground">Your past and current orders will appear here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
