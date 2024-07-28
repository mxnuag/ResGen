// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ4iB7Kk1T_aoLEOTgjsLordPZU44Rt3c",
  authDomain: "resgen-410c0.firebaseapp.com",
  projectId: "resgen-410c0",
  storageBucket: "resgen-410c0.appspot.com",
  messagingSenderId: "753890687443",
  appId: "1:753890687443:web:78ccc4bc87acb973e05726",
  measurementId: "G-079TYY0TTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  signInWithPopup(auth, provider);
};

const signOutFromGoogle = () => {
  signOut(auth);
};

export { auth, signInWithGoogle, signOutFromGoogle };
