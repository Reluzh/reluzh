"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, Send, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Mock submission
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
  };

  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <section className="text-center py-8">
        <h1 className="text-4xl font-headline font-bold text-primary mb-4">Get In Touch</h1>
        <p className="text-xl text-foreground/80 leading-relaxed">
          Have questions, feedback, or just want to say hello? We'd love to hear from you!
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-headline text-primary flex items-center">
              <MessageSquare className="w-6 h-6 mr-3 text-accent" /> Send Us a Message
            </CardTitle>
            <CardDescription>Fill out the form below and we'll respond as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="mt-1 rounded-md" />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required className="mt-1 rounded-md" />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" type="text" placeholder="Regarding..." value={formData.subject} onChange={handleChange} required className="mt-1 rounded-md" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message here..." value={formData.message} onChange={handleChange} required rows={5} className="mt-1 rounded-md" />
              </div>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-md">
                <Send className="w-5 h-5 mr-2" /> Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-headline text-primary">Contact Information</CardTitle>
            <CardDescription>Other ways to reach us or find information.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground">
            <div className="flex items-start">
              <Mail className="w-6 h-6 mr-4 mt-1 text-accent shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground">Email Us</h4>
                <a href="mailto:support@resqbox.com" className="hover:text-primary">support@resqbox.com</a>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="w-6 h-6 mr-4 mt-1 text-accent shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground">Call Us (Support Hours: 9am-5pm)</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="w-6 h-6 mr-4 mt-1 text-accent shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground">Our Office</h4>
                <p>100 Eco Lane, Green City, GC 54321</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Frequently Asked Questions</h4>
              <Button variant="outline" asChild className="rounded-md">
                <a href="/faq">Visit FAQ Page</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
