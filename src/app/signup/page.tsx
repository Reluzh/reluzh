
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from 'react';

// SVG for Google Icon
const GoogleIcon = () => (
  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    <path d="M1 1h22v22H1z" fill="none" />
  </svg>
);

// SVG for Apple Icon
const AppleIcon = () => (
  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.79,15.22C19.79,15.22,19.79,15.22,19.79,15.22c-0.03-0.05-0.56-0.85-1.54-0.85c-0.92,0-1.63,0.64-2.05,0.64 c-0.42,0-1.01-0.61-1.88-0.61c-0.93,0-1.73,0.63-2.12,0.63c-0.39,0-1.01-0.63-1.84-0.63c-1.42,0-2.63,1.11-2.63,3.03 c0,2.49,2.18,3.63,2.96,3.63c0.86,0,1.21-0.64,2.14-0.64c0.92,0,1.21,0.64,2.14,0.64c0.86,0,1.25-0.63,2.12-0.63 c0.33,0,1.48,0.75,2.42,0.64c0.28-0.03,1.32-0.23,1.73-1.4C20.71,17.34,19.79,15.22,19.79,15.22z M13.55,5.4 c0.44-0.54,0.7-1.25,0.66-1.98c-0.09-1.08-0.89-1.81-1.79-1.81c-1.42,0-2.71,1.06-3.45,1.06c-0.74,0-1.81-1.11-2.96-1.03 c-1.53,0.09-2.93,0.93-3.68,2.28c-1.23,2.22-0.37,5.46,0.99,7.26c0.63,0.82,1.34,1.79,2.34,1.79c0.92,0,1.28-0.61,2.13-0.61 c0.86,0,1.14,0.61,2.09,0.61c1.04,0,1.63-0.87,2.22-1.68C14.31,10.27,14.76,7.62,13.55,5.4z"/>
  </svg>
);

export default function SignUpPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Sign up attempt with:", { fullName, email, password });
    // Here you would typically handle actual sign up logic
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] py-8 px-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-primary">Create an Account</CardTitle>
          <CardDescription>Join ReboxIt and start saving!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Button variant="outline" className="w-full">
              <GoogleIcon />
              Sign up with Google
            </Button>
            <Button variant="outline" className="w-full">
              <AppleIcon />
              Sign up with Apple
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                Or sign up with email
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input 
                id="fullName" 
                type="text" 
                placeholder="Your Name" 
                required 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="you@example.com" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1"
              />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Sign Up
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-primary hover:underline">
              Log In
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
