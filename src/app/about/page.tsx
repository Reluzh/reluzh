
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Users, TrendingUp } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <header className="text-center py-6">
        <h1 className="text-3xl font-bold text-primary mb-3">About ReboxIt</h1>
        <p className="text-lg text-foreground/80 leading-relaxed">
          We are passionate about connecting communities with surplus food, reducing waste, and making delicious meals accessible to everyone at affordable prices.
        </p>
      </header>

      <Card className="shadow-md rounded-lg border">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-primary flex items-center">
            <Leaf className="w-5 h-5 mr-2.5 text-accent" /> Our Mission
          </CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground space-y-3 text-sm">
          <p>
            At ReboxIt, our mission is threefold: to combat food waste, support local businesses, and provide consumers with high-quality food at significantly reduced prices. We believe that good food should be enjoyed, not discarded.
          </p>
          <p>
            Every year, tons of perfectly edible food from restaurants, cafes, and grocery stores go to waste. We aim to change that by creating a simple, efficient platform where businesses can sell their surplus items directly to consumers.
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-md rounded-lg border">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-primary flex items-center">
            <Users className="w-5 h-5 mr-2.5 text-accent" /> Who We Are
          </CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground space-y-3 text-sm">
          <p>
            ReboxIt was founded by a group of eco-conscious food lovers who were tired of seeing good food go to waste. We are a team of developers, designers, and food enthusiasts dedicated to building a sustainable future, one meal at a time.
          </p>
          <p>
            Our platform is built on the principles of community, sustainability, and innovation. We strive to make it easy and rewarding for both businesses and customers to participate in the food rescue movement.
          </p>
        </CardContent>
      </Card>
      
      <Card className="shadow-md rounded-lg border">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-primary flex items-center">
            <TrendingUp className="w-5 h-5 mr-2.5 text-accent" /> Our Impact
          </CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground space-y-3 text-sm">
          <p>
            By using ReboxIt, you're not just getting a great deal on food; you're actively contributing to a more sustainable food system. Together, we can:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-4">
            <li>Reduce landfill waste and its environmental impact.</li>
            <li>Help local businesses recover costs and reach new customers.</li>
            <li>Make fresh food more accessible and affordable for everyone.</li>
            <li>Promote a culture of mindful consumption.</li>
          </ul>
          <p>
            Join us in making a difference. Every ReboxIt purchase is a step towards a greener, more equitable world.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
