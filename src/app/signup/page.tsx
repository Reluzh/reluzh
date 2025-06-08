
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
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" className="mr-2 h-5 w-5" fill="currentColor">
    <path d="M1377 962q0-14-2-42.5t-1.5-53.5-5.5-58.5-13-55-25.5-43.5-43.5-25-68-1-94 30.5-107.5 70-107.5 107.5-94 143-68 176.5q-30 128-30 242 0 189 93 300t247 111q51 0 100-14.5t89-42.5q41 23 90 42.5t99 14.5q151 0 245-111t94-300q0-158-50-256-11-18-11-30zm-550 545q-119 0-193.5-80t-74.5-199q0-120 73.5-199t192.5-79q29 0 52 6.5t52 21.5l6 2q1 1 1.5 2t1.5 2.5.5.5q-206 108-206 345zm393-155q0 115-62 179-65 68-173 68-47 0-93.5-20.5t-83.5-57.5q-3 1-8.5 1.5t-10 1-12 .5q-136 0-223-89.5t-87-221.5q0-129 82-218.5t204-89.5q43 0 87.5 16t78.5 46q31-25 77-46t91-16q117 0 180.5 68.5t63.5 181.5z"/>
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
