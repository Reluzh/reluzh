
"use client";

import Link from "next/link";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect, type FormEvent } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useToast } from "@/hooks/use-toast";

const GoogleIcon = () => (
  <svg className="mr-2 h-5 w-5" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Google icon</title>
    <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.386-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.85l3.25-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" fill="#4285F4"/>
  </svg>
);

const AppleIcon = () => (
  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.035 13.872C18.015 12.232 19.225 11.082 19.265 11.052C17.955 9.102 16.435 8.912 15.935 8.902C14.615 8.842 13.475 9.662 12.815 9.662C12.145 9.662 10.795 8.822 9.40502 8.882C8.01502 8.932 6.80502 9.592 6.00502 10.632C4.26502 12.952 4.50502 16.402 5.96502 18.582C6.69502 19.682 7.60502 20.982 8.87502 20.982C10.095 20.982 10.465 20.322 12.025 20.322C13.565 20.322 13.965 20.982 15.205 20.962C16.475 20.952 17.295 19.762 18.005 18.652C18.205 18.342 18.385 18.002 18.555 17.652C17.305 17.062 16.675 15.472 16.675 13.932C16.675 13.112 16.895 12.342 17.285 11.672C17.365 11.742 18.065 12.182 18.035 13.872ZM14.125 6.062C14.675 5.442 15.035 4.582 14.955 3.742C14.135 3.852 13.235 4.412 12.655 5.012C12.155 5.552 11.725 6.452 11.835 7.302C12.725 7.232 13.545 6.692 14.125 6.062Z"/>
  </svg>
);

export default function SignUpPage() {
  const { user, signUpWithEmail, signInWithGoogle, loading: authLoading } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (user) {
      router.push('/profile');
    }
  }, [user, router]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!fullName.trim()) {
      toast({ title: "Full Name Required", description: "Please enter your full name.", variant: "destructive" });
      return;
    }
    if (authLoading || isSubmitting) return;
    setIsSubmitting(true);
    try {
      await signUpWithEmail(fullName, email, password);
      toast({ title: "Account created successfully!" });
      // router.push('/profile'); // Let useEffect handle redirect
    } catch (error: any) {
      console.error("Sign up error:", error);
      toast({ title: "Sign Up Failed", description: error.message || "An unknown error occurred. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    if (authLoading || isSubmitting) return;
    setIsSubmitting(true);
    try {
      await signInWithGoogle();
      toast({ title: "Signed up with Google successfully!" });
      // router.push('/profile'); // Let useEffect handle redirect
    } catch (error: any) {
      console.error("Google Sign-up error:", error);
      toast({ title: "Google Sign-up Failed", description: error.message || "An unknown error occurred. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (authLoading && !user) {
    return <div className="flex justify-center items-center min-h-[calc(100vh-12rem)]"><p>Loading...</p></div>;
  }

  if (user) {
    return <div className="flex justify-center items-center min-h-[calc(100vh-12rem)]"><p>Redirecting...</p></div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] py-8 px-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-primary">Create an Account</CardTitle>
          <CardDescription>Join ReboxIt and start saving!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Button variant="outline" className="w-full" onClick={handleGoogleSignIn} disabled={authLoading || isSubmitting}>
              <GoogleIcon />
              Sign up with Google
            </Button>
            <Button variant="outline" className="w-full" disabled={true} title="Apple Sign-In coming soon!">
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
                disabled={authLoading || isSubmitting}
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
                disabled={authLoading || isSubmitting}
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="•••••••• (min. 6 characters)" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1"
                disabled={authLoading || isSubmitting}
              />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={authLoading || isSubmitting}>
              {isSubmitting ? 'Signing Up...' : 'Sign Up'}
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
