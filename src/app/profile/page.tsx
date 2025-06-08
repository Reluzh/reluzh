
"use client";

import { useState, useEffect } from 'react';
import { mockUserProfile } from '@/lib/mock-data';
import type { UserProfile as UserProfileType } from '@/types';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChevronRight, Gift, HelpCircle, LogOut, Bell, CreditCard, MapPin, UserCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

interface ProfileMenuItemProps {
  icon: React.ElementType;
  label: string;
  description?: string;
  href: string;
  isExternal?: boolean;
}

const ProfileMenuItem: React.FC<ProfileMenuItemProps> = ({ icon: Icon, label, description, href, isExternal }) => (
  <Link href={href} target={isExternal ? '_blank' : '_self'} rel={isExternal ? 'noopener noreferrer' : ''} className="block">
    <div className="flex items-center py-4 px-1 hover:bg-muted/50 rounded-md transition-colors">
      <Icon className="h-6 w-6 mr-4 text-primary" />
      <div className="flex-grow">
        <p className="font-medium text-foreground">{label}</p>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
      <ChevronRight className="h-5 w-5 text-muted-foreground" />
    </div>
  </Link>
);

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfileType | null>(null);

  useEffect(() => {
    setProfile(mockUserProfile);
  }, []);

  if (!profile) {
    return <div className="text-center py-10">Loading profile...</div>;
  }

  return (
    <div className="pb-4">
      <header className="flex items-center space-x-4 py-4 mb-4">
        <Avatar className="w-16 h-16 border-2 border-primary">
          <AvatarImage src={profile.profilePictureUrl} alt={profile.name} data-ai-hint={profile.dataAiHint} />
          <AvatarFallback className="text-2xl bg-muted text-muted-foreground">
            {profile.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-xl font-bold text-foreground">{profile.name}</h1>
          <h2 className="text-lg text-muted-foreground">Account</h2>
        </div>
      </header>

      <div className="space-y-2">
        <ProfileMenuItem icon={HelpCircle} label="Get Help" href="/contact" />
        <ProfileMenuItem icon={Gift} label="Gift Card" href="/giftcard" /> {/* Assuming a /giftcard page */}
      </div>

      <Separator className="my-6" />

      <h3 className="text-lg font-semibold text-foreground mb-2">Account Settings</h3>
      <div className="space-y-1 bg-card rounded-lg border p-2">
        <ProfileMenuItem 
          icon={UserCircle2} 
          label="Manage Account" 
          description="Update information and manage your account" 
          href="/profile/edit"  // Assuming an edit page
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

      <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10 mt-8 py-4 px-1 text-base">
        <LogOut className="h-6 w-6 mr-4" />
        Log Out
      </Button>
    </div>
  );
}
