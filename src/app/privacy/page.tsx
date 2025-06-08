import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Lock } from "lucide-react";

export default function PrivacyPage() {
  const lastUpdated = "July 26, 2024"; // Placeholder date

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <section className="text-center py-8">
        <ShieldCheck className="w-16 h-16 mx-auto mb-4 text-primary" />
        <h1 className="text-4xl font-headline font-bold text-primary mb-4">Privacy Policy</h1>
        <p className="text-lg text-muted-foreground">Last Updated: {lastUpdated}</p>
      </section>

      <Card className="shadow-md rounded-lg">
        <CardHeader>
          <CardTitle className="text-xl font-headline text-primary">1. Introduction</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground space-y-3">
          <p>Welcome to ResQBox ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at privacy@resqbox.com.</p>
          <p>This privacy notice describes how we might use your information if you visit our website at resqbox.com, use our mobile application, or engage with us in other related ways ― including any sales, marketing, or events.</p>
        </CardContent>
      </Card>

      <Card className="shadow-md rounded-lg">
        <CardHeader>
          <CardTitle className="text-xl font-headline text-primary">2. Information We Collect</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground space-y-3">
          <p><strong>Personal information you disclose to us:</strong> We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
          <p>The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following: name, email address, phone number, address, payment information, and other similar information.</p>
          <p><strong>Information automatically collected:</strong> We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information.</p>
        </CardContent>
      </Card>
      
      <Card className="shadow-md rounded-lg">
        <CardHeader>
          <CardTitle className="text-xl font-headline text-primary">3. How We Use Your Information</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground space-y-3">
          <p>We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>To facilitate account creation and logon process.</li>
            <li>To post testimonials (with your consent).</li>
            <li>To manage user accounts.</li>
            <li>To send administrative information to you.</li>
            <li>To protect our Services (e.g., for fraud monitoring and prevention).</li>
            <li>To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="shadow-md rounded-lg">
        <CardHeader>
          <CardTitle className="text-xl font-headline text-primary flex items-center">
            <Lock className="w-5 h-5 mr-2 text-accent" /> Data Security
          </CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.</p>
        </CardContent>
      </Card>

      <Card className="shadow-md rounded-lg">
        <CardHeader>
          <CardTitle className="text-xl font-headline text-primary">4. Your Privacy Rights</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          <p>In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. To make such a request, please use the contact details provided below.</p>
        </CardContent>
      </Card>

      <Card className="shadow-md rounded-lg">
        <CardHeader>
          <CardTitle className="text-xl font-headline text-primary">5. Contact Us</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          <p>If you have questions or comments about this notice, you may email us at privacy@resqbox.com or by post to:</p>
          <p className="mt-2">
            ResQBox Privacy Team<br />
            100 Eco Lane<br />
            Green City, GC 54321<br />
            United States
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
