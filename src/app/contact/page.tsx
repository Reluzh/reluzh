
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquareText, Send, Phone, MapPin } from "lucide-react"; // Changed MessageSquare to MessageSquareText for distinction
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
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' }); 
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <header className="text-center py-6">
        <h1 className="text-3xl font-bold text-primary mb-3">Get In Touch</h1>
        <p className="text-lg text-foreground/80 leading-relaxed">
          Have questions, feedback, or just want to say hello? We'd love to hear from you!
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-md rounded-lg border">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-primary flex items-center">
              <MessageSquareText className="w-5 h-5 mr-2.5 text-accent" /> Send Us a Message
            </CardTitle>
            <CardDescription className="text-sm">Fill out the form below and we'll respond as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name" className="text-xs">Full Name</Label>
                <Input id="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="mt-1 rounded-md bg-card" />
              </div>
              <div>
                <Label htmlFor="email" className="text-xs">Email Address</Label>
                <Input id="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required className="mt-1 rounded-md bg-card" />
              </div>
              <div>
                <Label htmlFor="subject" className="text-xs">Subject</Label>
                <Input id="subject" type="text" placeholder="Regarding..." value={formData.subject} onChange={handleChange} required className="mt-1 rounded-md bg-card" />
              </div>
              <div>
                <Label htmlFor="message" className="text-xs">Message</Label>
                <Textarea id="message" placeholder="Your message here..." value={formData.message} onChange={handleChange} required rows={4} className="mt-1 rounded-md bg-card" />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-md">
                <Send className="w-4 h-4 mr-2" /> Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="shadow-md rounded-lg border">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-primary">Contact Information</CardTitle>
            <CardDescription className="text-sm">Other ways to reach us or find information.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5 text-sm text-muted-foreground">
            <div className="flex items-start">
              <Mail className="w-5 h-5 mr-3 mt-0.5 text-accent shrink-0" />
              <div>
                <h4 className="font-medium text-foreground">Email Us</h4>
                <a href="mailto:support@resqbox.com" className="hover:text-primary">support@resqbox.com</a>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="w-5 h-5 mr-3 mt-0.5 text-accent shrink-0" />
              <div>
                <h4 className="font-medium text-foreground">Call Us (Support: 9am-5pm)</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="w-5 h-5 mr-3 mt-0.5 text-accent shrink-0" />
              <div>
                <h4 className="font-medium text-foreground">Our Office</h4>
                <p>100 Eco Lane, Green City, GC 54321</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-1.5">Frequently Asked Questions</h4>
              <Button variant="outline" size="sm" asChild className="rounded-md bg-card">
                <a href="/faq">Visit FAQ Page</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
