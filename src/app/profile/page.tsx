"use client";

import { useState, useEffect } from 'react';
import { mockUserProfile } from '@/lib/mock-data';
import type { UserProfile as UserProfileType } from '@/types';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Edit3, Save, Mail, MapPinIcon, UserCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfileType | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Partial<UserProfileType>>({});
  const { toast } = useToast();

  useEffect(() => {
    // Simulate fetching profile data
    setProfile(mockUserProfile);
    setFormData(mockUserProfile);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEditToggle = () => {
    if (isEditing) {
      // Save logic (mocked)
      setProfile(prev => ({ ...prev!, ...formData }));
      toast({
        title: "Profile Updated",
        description: "Your profile information has been saved.",
        variant: "default",
      });
    } else {
      // Reset form data to current profile when entering edit mode
      setFormData(profile || {});
    }
    setIsEditing(!isEditing);
  };

  if (!profile) {
    return <div className="text-center py-10">Loading profile...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <section className="text-center py-8">
        <h1 className="text-4xl font-headline font-bold text-primary mb-2">Your Profile</h1>
        <p className="text-lg text-foreground/80">Manage your account details and preferences.</p>
      </section>

      <Card className="shadow-xl rounded-lg">
        <CardHeader className="items-center text-center">
          <Avatar className="w-32 h-32 mb-4 border-4 border-primary shadow-md">
            <AvatarImage src={formData.profilePictureUrl || profile.profilePictureUrl} alt={profile.name} data-ai-hint={profile.dataAiHint}/>
            <AvatarFallback className="text-4xl bg-muted text-muted-foreground">
              {profile.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          {isEditing && (
             <div className="w-full max-w-sm">
                <Label htmlFor="profilePictureUrl">Profile Picture URL</Label>
                <Input 
                    id="profilePictureUrl" 
                    name="profilePictureUrl" 
                    value={formData.profilePictureUrl || ''} 
                    onChange={handleInputChange}
                    className="mt-1 rounded-md"
                />
             </div>
          )}
          <CardTitle className="text-3xl font-headline mt-2">{isEditing ? formData.name : profile.name}</CardTitle>
          <CardDescription>{isEditing ? formData.email : profile.email}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="font-semibold flex items-center"><UserCircle className="w-5 h-5 mr-2 text-primary"/> Full Name</Label>
              {isEditing ? (
                <Input id="name" name="name" value={formData.name || ''} onChange={handleInputChange} className="mt-1 rounded-md" />
              ) : (
                <p className="text-muted-foreground mt-1 p-2 bg-muted/50 rounded-md">{profile.name}</p>
              )}
            </div>
            <div>
              <Label htmlFor="email" className="font-semibold flex items-center"><Mail className="w-5 h-5 mr-2 text-primary"/> Email Address</Label>
              {isEditing ? (
                <Input id="email" name="email" type="email" value={formData.email || ''} onChange={handleInputChange} className="mt-1 rounded-md" />
              ) : (
                <p className="text-muted-foreground mt-1 p-2 bg-muted/50 rounded-md">{profile.email}</p>
              )}
            </div>
            <div>
              <Label htmlFor="address" className="font-semibold flex items-center"><MapPinIcon className="w-5 h-5 mr-2 text-primary"/> Address</Label>
              {isEditing ? (
                <Input id="address" name="address" value={formData.address || ''} onChange={handleInputChange} className="mt-1 rounded-md" />
              ) : (
                <p className="text-muted-foreground mt-1 p-2 bg-muted/50 rounded-md">{profile.address || 'Not provided'}</p>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-6">
          <Button onClick={handleEditToggle} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-md">
            {isEditing ? <Save className="mr-2 h-5 w-5" /> : <Edit3 className="mr-2 h-5 w-5" />}
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
