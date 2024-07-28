// src/Firebase.js
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBQ4iB7Kk1T_aoLEOTgjsLordPZU44Rt3c",
  authDomain: "resgen-410c0.firebaseapp.com",
  projectId: "resgen-410c0",
  storageBucket: "resgen-410c0.appspot.com",
  messagingSenderId: "753890687443",
  appId: "1:753890687443:web:78ccc4bc87acb973e05726",
  measurementId: "G-079TYY0TTR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

export const signOutFromGoogle = () => {
  return signOut(auth);
};
