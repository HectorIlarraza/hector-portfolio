import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyDgTolMo61fLo61nunocodiYLS0heysc0M",
  authDomain: "react-portolio-dashboard.firebaseapp.com",
  projectId: "react-portolio-dashboard",
  storageBucket: "react-portolio-dashboard.appspot.com",
  messagingSenderId: "527895337169",
  appId: "1:527895337169:web:02b09004d66ae72cd0cdf0",
  measurementId: "G-J2EYPCME02"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);