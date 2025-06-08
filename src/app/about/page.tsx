import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Users, TrendingUp } from "lucide-react";
import ScrollAnimatedDiv from "@/components/scroll-animated-div";

export default function AboutPage() {
  return (
    <div className="space-y-12 max-w-3xl mx-auto">
      <ScrollAnimatedDiv delayMs={0}>
        <section className="text-center py-8">
          <h1 className="text-4xl font-headline font-bold text-primary mb-4">About ResQBox</h1>
          <p className="text-xl text-foreground/80 leading-relaxed">
            We are passionate about connecting communities with surplus food, reducing waste, and making delicious meals accessible to everyone at affordable prices.
          </p>
        </section>
      </ScrollAnimatedDiv>

      <ScrollAnimatedDiv delayMs={100}>
        <Card className="shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-headline text-primary flex items-center">
              <Leaf className="w-6 h-6 mr-3 text-accent" /> Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              At ResQBox, our mission is threefold: to combat food waste, support local businesses, and provide consumers with high-quality food at significantly reduced prices. We believe that good food should be enjoyed, not discarded.
            </p>
            <p>
              Every year, tons of perfectly edible food from restaurants, cafes, and grocery stores go to waste. We aim to change that by creating a simple, efficient platform where businesses can sell their surplus items directly to consumers.
            </p>
          </CardContent>
        </Card>
      </ScrollAnimatedDiv>

      <ScrollAnimatedDiv delayMs={200}>
        <Card className="shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-headline text-primary flex items-center">
              <Users className="w-6 h-6 mr-3 text-accent" /> Who We Are
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              ResQBox was founded by a group of eco-conscious food lovers who were tired of seeing good food go to waste. We are a team of developers, designers, and food enthusiasts dedicated to building a sustainable future, one meal at a time.
            </p>
            <p>
              Our platform is built on the principles of community, sustainability, and innovation. We strive to make it easy and rewarding for both businesses and customers to participate in the food rescue movement.
            </p>
          </CardContent>
        </Card>
      </ScrollAnimatedDiv>
      
      <ScrollAnimatedDiv delayMs={300}>
        <Card className="shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-headline text-primary flex items-center">
              <TrendingUp className="w-6 h-6 mr-3 text-accent" /> Our Impact
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              By using ResQBox, you're not just getting a great deal on food; you're actively contributing to a more sustainable food system. Together, we can:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Reduce landfill waste and its environmental impact.</li>
              <li>Help local businesses recover costs and reach new customers.</li>
              <li>Make fresh food more accessible and affordable for everyone.</li>
              <li>Promote a culture of mindful consumption.</li>
            </ul>
            <p>
              Join us in making a difference. Every ResQBox purchase is a step towards a greener, more equitable world.
            </p>
          </CardContent>
        </Card>
      </ScrollAnimatedDiv>
    </div>
  );
}
