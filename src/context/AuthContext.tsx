
'use client';

import type { User as FirebaseUserType } from 'firebase/auth';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { auth, db } from '@/lib/firebase';
import {
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp, Timestamp } from 'firebase/firestore';
import type { FirestoreUser as FirestoreUserType } from '@/types';

interface AuthContextType {
  user: FirebaseUserType | null;
  firestoreUser: FirestoreUserType | null;
  loading: boolean;
  signUpWithEmail: (name: string, email: string, pass: string) => Promise<void>;
  loginWithEmail: (email: string, pass: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  logoutUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<FirebaseUserType | null>(null);
  const [firestoreUser, setFirestoreUser] = useState<FirestoreUserType | null>(null);
  const [loading, setLoading] = useState(true);

  const createUserDocument = async (firebaseUser: FirebaseUserType, displayNameInput?: string | null) => {
    const userDocRef = doc(db, 'users', firebaseUser.uid);
    // Make sure to get displayName from firebaseUser first if available (e.g. from Google)
    const nameToStore = displayNameInput || firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'Anonymous User';
    
    const newUserDoc: FirestoreUserType = {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      displayName: nameToStore,
      photoURL: firebaseUser.photoURL,
      createdAt: serverTimestamp() as Timestamp, // Firestore handles serverTimestamp()
    };
    await setDoc(userDocRef, newUserDoc, { merge: true });
    // Fetch the document to get the server-generated timestamp correctly
    const savedDoc = await getDoc(userDocRef);
    setFirestoreUser(savedDoc.data() as FirestoreUserType);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userDocRef = doc(db, 'users', currentUser.uid);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          setFirestoreUser(userDocSnap.data() as FirestoreUserType);
        } else {
          // This case could happen if user signed up but doc creation failed,
          // or for a new Google Sign-In user where the doc wasn't created yet.
          // Create it now if it's missing, especially for Google users.
          if (currentUser.providerData.some(p => p.providerId === GoogleAuthProvider.PROVIDER_ID) || currentUser.email) {
             await createUserDocument(currentUser); // name will be from currentUser.displayName
          } else {
            console.warn("User document doesn't exist and cannot auto-create without more info.");
            setFirestoreUser(null);
          }
        }
      } else {
        setFirestoreUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);


  const signUpWithEmail = async (name: string, email: string, pass: string) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      if (userCredential.user) {
        await updateProfile(userCredential.user, { displayName: name });
        await createUserDocument(userCredential.user, name); // Pass name explicitly
      }
    } finally {
      // onAuthStateChanged will set loading to false after user state is confirmed
    }
  };
  
  const loginWithEmail = async (email: string, pass: string) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, pass);
    } finally {
      // onAuthStateChanged will handle setting user, firestoreUser, and loading
    }
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        const userDocRef = doc(db, 'users', result.user.uid);
        const docSnap = await getDoc(userDocRef);
        if (!docSnap.exists()) {
          await createUserDocument(result.user, result.user.displayName);
        }
      }
    } finally {
      // onAuthStateChanged handles updates
    }
  };

  const logoutUser = async () => {
    setLoading(true);
    await signOut(auth);
    // onAuthStateChanged will set user to null and loading to false
  };

  return (
    <AuthContext.Provider value={{ user, firestoreUser, loading, signUpWithEmail, loginWithEmail, signInWithGoogle, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
