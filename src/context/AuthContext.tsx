
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
    const nameToStore = displayNameInput || firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'Anonymous User';
    
    const newUserDoc: FirestoreUserType = {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      displayName: nameToStore,
      photoURL: firebaseUser.photoURL,
      createdAt: serverTimestamp() as Timestamp, 
    };
    try {
      await setDoc(userDocRef, newUserDoc, { merge: true });
      const savedDoc = await getDoc(userDocRef);
      if (savedDoc.exists()) {
        setFirestoreUser(savedDoc.data() as FirestoreUserType);
      } else {
        // This case should ideally not happen if setDoc was successful
        console.warn("User document not found immediately after creation for UID:", firebaseUser.uid);
        setFirestoreUser(null);
      }
    } catch (error) {
        console.error("Error creating or fetching user document after setDoc:", error);
        // Depending on the error, you might want to set firestoreUser to null or handle differently
        // For "client is offline", this will prevent a crash.
        setFirestoreUser(null);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userDocRef = doc(db, 'users', currentUser.uid);
        try {
          const userDocSnap = await getDoc(userDocRef);
          if (userDocSnap.exists()) {
            setFirestoreUser(userDocSnap.data() as FirestoreUserType);
          } else {
            // This case could happen if user signed up but doc creation failed,
            // or for a new Google Sign-In user where the doc wasn't created yet.
            // Create it now if it's missing.
            console.warn("User document not found for existing user UID:", currentUser.uid, "Attempting to create it.");
            await createUserDocument(currentUser); // name will be from currentUser.displayName or email
          }
        } catch (error) {
          console.error("Error fetching user document in onAuthStateChanged:", error);
          // If fetching fails (e.g., client is offline), set firestoreUser to null.
          // The UI should handle this state gracefully (e.g., show a loading/error message).
          setFirestoreUser(null);
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
        await createUserDocument(userCredential.user, name); 
      }
    } finally {
      // onAuthStateChanged will eventually set loading to false.
      // No need to setLoading(false) here as onAuthStateChanged handles the final state.
    }
  };
  
  const loginWithEmail = async (email: string, pass: string) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, pass);
    } finally {
      // onAuthStateChanged will handle setting user, firestoreUser, and loading.
    }
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // The onAuthStateChanged listener will handle creating/fetching the user document.
      // No need to explicitly call createUserDocument here unless onAuthStateChanged logic is insufficient.
      // The current onAuthStateChanged logic should cover new Google sign-ins.
    } finally {
      // onAuthStateChanged handles updates.
    }
  };

  const logoutUser = async () => {
    setLoading(true);
    await signOut(auth);
    // onAuthStateChanged will set user to null and loading to false.
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
