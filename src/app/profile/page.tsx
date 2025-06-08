
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChevronRight, Gift, HelpCircle, LogOut, Bell, CreditCard, MapPin, UserCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/context/AuthContext';
import { useToast } from "@/hooks/use-toast";

interface ProfileMenuItemProps {
  icon: React.ElementType;
  label: string;
  description?: string;
  href: string;
  isExternal?: boolean;
  onClick?: () => void; // Added onClick for logout
}

const ProfileMenuItem: React.FC<ProfileMenuItemProps> = ({ icon: Icon, label, description, href, isExternal, onClick }) => {
  const content = (
    <div className="flex items-center py-4 px-1 hover:bg-muted/50 rounded-md transition-colors">
      <Icon className="h-6 w-6 mr-4 text-primary" />
      <div className="flex-grow">
        <p className="font-medium text-foreground">{label}</p>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
      <ChevronRight className="h-5 w-5 text-muted-foreground" />
    </div>
  );

  if (onClick) {
    return <button onClick={onClick} className="block w-full text-left">{content}</button>;
  }

  return (
    <Link href={href} target={isExternal ? '_blank' : '_self'} rel={isExternal ? 'noopener noreferrer' : ''} className="block">
      {content}
    </Link>
  );
};

export default function ProfilePage() {
  const { user, firestoreUser, loading: authLoading, logoutUser } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    }
  }, [user, authLoading, router]);

  const handleLogout = async () => {
    try {
      await logoutUser();
      toast({ title: "Logged out successfully."});
      router.push('/login'); // Ensure redirect after logout
    } catch (error: any) {
      toast({ title: "Logout Failed", description: error.message || "An unknown error occurred.", variant: "destructive" });
    }
  };

  if (authLoading || !user) { // Show loading until user state is confirmed
    return <div className="flex justify-center items-center min-h-[calc(100vh-12rem)]"><p>Loading profile...</p></div>;
  }
  
  // This check ensures firestoreUser is loaded before rendering dependent UI
  if (!firestoreUser) {
      return <div className="flex justify-center items-center min-h-[calc(100vh-12rem)]"><p>Loading user details...</p></div>;
  }


  return (
    <div className="pb-4">
      <header className="flex items-center space-x-4 py-4 mb-4">
        <Avatar className="w-16 h-16 border-2 border-primary">
          <AvatarImage src={firestoreUser.photoURL || user.photoURL || undefined} alt={firestoreUser.displayName || 'User'} />
          <AvatarFallback className="text-2xl bg-muted text-muted-foreground">
            {(firestoreUser.displayName || user.email || 'U').charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-xl font-bold text-foreground">{firestoreUser.displayName || 'User'}</h1>
          <p className="text-sm text-muted-foreground">{user.email}</p>
        </div>
      </header>

      <div className="space-y-2">
        <ProfileMenuItem icon={HelpCircle} label="Get Help" href="/contact" />
        <ProfileMenuItem icon={Gift} label="Gift Card" href="/giftcard" />
      </div>

      <Separator className="my-6" />

      <h3 className="text-lg font-semibold text-foreground mb-2">Account Settings</h3>
      <div className="space-y-1 bg-card rounded-lg border p-2">
        <ProfileMenuItem 
          icon={UserCircle2} 
          label="Manage Account" 
          description="Update information and manage your account" 
          href="/profile/edit"
        />
        <Separator className="my-1 mx-2 bg-border/50" />
        <ProfileMenuItem 
          icon={CreditCard} 
          label="Payment" 
          description="Manage payment methods and credits" 
          href="/profile/payment" 
        />
        <Separator className="my-1 mx-2 bg-border/50" />
        <ProfileMenuItem 
          icon={MapPin} 
          label="Address" 
          description="Add or remove a delivery address" 
          href="/profile/address" 
        />
        <Separator className="my-1 mx-2 bg-border/50" />
        <ProfileMenuItem 
          icon={Bell} 
          label="Notifications" 
          description="Manage delivery and promotional notifications" 
          href="/profile/notifications" 
        />
      </div>

      <Button 
        variant="ghost" 
        onClick={handleLogout} 
        className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10 mt-8 py-4 px-1 text-base" 
        disabled={authLoading}
      >
        <LogOut className="h-6 w-6 mr-4" />
        {authLoading ? 'Logging out...' : 'Log Out'}
      </Button>
    </div>
  );
}
