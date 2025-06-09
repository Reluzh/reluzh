
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
  onClick?: () => void; 
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
    // DEVELOPMENT: The redirect is temporarily disabled to allow viewing the profile page
    // without full authentication. Re-enable for production.
    // if (!authLoading && !user) {
    //   router.push('/login');
    // }
  }, [user, authLoading, router]);

  const handleLogout = async () => {
    try {
      await logoutUser();
      toast({ title: "Logged out successfully."});
      router.push('/login'); 
    } catch (error: any) {
      toast({ title: "Logout Failed", description: error.message || "An unknown error occurred.", variant: "destructive" });
    }
  };

  if (authLoading) {
    return <div className="flex justify-center items-center min-h-[calc(100vh-12rem)]"><p>Loading profile (auth)...</p></div>;
  }

  // If user is authenticated but firestoreUser data is still loading or missing
  if (user && !firestoreUser && !authLoading) {
      return <div className="flex justify-center items-center min-h-[calc(100vh-12rem)]"><p>Loading user details...</p></div>;
  }

  // Placeholder data for development if user/firestoreUser is not available
  const effectiveUser = user;
  const effectiveFirestoreUser = firestoreUser;

  const displayName = effectiveFirestoreUser?.displayName || effectiveUser?.displayName || "Development User";
  const email = effectiveUser?.email || "dev@example.com";
  const photoURL = effectiveFirestoreUser?.photoURL || effectiveUser?.photoURL || undefined;
  const fallbackChar = (displayName.charAt(0) || 'D').toUpperCase();

  return (
    <div className="pb-4">
      <header className="flex items-center space-x-4 py-4 mb-4">
        <Avatar className="w-16 h-16 border-2 border-primary">
          <AvatarImage src={photoURL} alt={displayName} />
          <AvatarFallback className="text-2xl bg-muted text-muted-foreground">
            {fallbackChar}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-xl font-bold text-foreground">{displayName}</h1>
          <p className="text-sm text-muted-foreground">{email}</p>
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
        disabled={authLoading || !user} // Disable if not actually logged in or still loading
      >
        <LogOut className="h-6 w-6 mr-4" />
        {authLoading ? 'Logging out...' : 'Log Out'}
      </Button>
    </div>
  );
}
