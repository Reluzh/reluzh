
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquareText, Send, Phone, MapPin } from "lucide-react"; 
import { useState } from "react";

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Envoyé !",
      description: "Merci de nous avoir contactés. Nous vous répondrons bientôt.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' }); 
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <header className="text-center py-6">
        <h1 className="text-3xl font-bold text-primary mb-3">Contactez-Nous</h1>
        <p className="text-lg text-foreground/80 leading-relaxed">
          Des questions, des commentaires, ou juste envie de dire bonjour ? Nous aimerions avoir de vos nouvelles !
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-md rounded-lg border">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-primary flex items-center">
              <MessageSquareText className="w-5 h-5 mr-2.5 text-accent" /> Envoyez-nous un Message
            </CardTitle>
            <CardDescription className="text-sm">Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name" className="text-xs">Nom Complet</Label>
                <Input id="name" type="text" placeholder="Votre Nom" value={formData.name} onChange={handleChange} required className="mt-1 rounded-md bg-card" />
              </div>
              <div>
                <Label htmlFor="email" className="text-xs">Adresse E-mail</Label>
                <Input id="email" type="email" placeholder="votre@email.com" value={formData.email} onChange={handleChange} required className="mt-1 rounded-md bg-card" />
              </div>
              <div>
                <Label htmlFor="subject" className="text-xs">Sujet</Label>
                <Input id="subject" type="text" placeholder="Concernant..." value={formData.subject} onChange={handleChange} required className="mt-1 rounded-md bg-card" />
              </div>
              <div>
                <Label htmlFor="message" className="text-xs">Message</Label>
                <Textarea id="message" placeholder="Votre message ici..." value={formData.message} onChange={handleChange} required rows={4} className="mt-1 rounded-md bg-card" />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-md">
                <Send className="w-4 h-4 mr-2" /> Envoyer le Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="shadow-md rounded-lg border">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-primary">Informations de Contact</CardTitle>
            <CardDescription className="text-sm">Autres moyens de nous joindre ou de trouver des informations.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5 text-sm text-muted-foreground">
            <div className="flex items-start">
              <Mail className="w-5 h-5 mr-3 mt-0.5 text-accent shrink-0" />
              <div>
                <h4 className="font-medium text-foreground">Envoyez-nous un E-mail</h4>
                <a href="mailto:contact@reboxit.ma" className="hover:text-primary">contact@reboxit.ma</a>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="w-5 h-5 mr-3 mt-0.5 text-accent shrink-0" />
              <div>
                <h4 className="font-medium text-foreground">Appelez-nous (Support: 9h-17h)</h4>
                <p>+212 522 12 34 56</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="w-5 h-5 mr-3 mt-0.5 text-accent shrink-0" />
              <div>
                <h4 className="font-medium text-foreground">Notre Bureau</h4>
                <p>Technopark, Route de Nouaceur, Casablanca, Maroc</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-1.5">Questions Fréquemment Posées</h4>
              <Button variant="outline" size="sm" asChild className="rounded-md bg-card">
                <a href="/faq">Visiter la Page FAQ</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

    