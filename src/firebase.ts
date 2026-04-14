import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  //   // COPY this from your Firebase Console
  //   apiKey: "your-api-key-goes-here",
  //   authDomain: "your-project-name-here.firebaseapp.com",
  //   databaseURL: "https://your-project-name-here.firebaseio.com",
  //   projectId: "your-project-name-here",
  //   storageBucket: "your-project-name.appspot.com",
  //   messagingSenderId: "xxxxxxxx",

  // I have created this for Web Arch assignment-5 only:

  apiKey: "AIzaSyCoqylE0ZFq4IRADFlaCG_SM6U7rZ03b30",
  authDomain: "beverageshop-c8498.firebaseapp.com",
  projectId: "beverageshop-c8498",
  storageBucket: "beverageshop-c8498.firebasestorage.app",
  messagingSenderId: "1079307424887",
  appId: "1:1079307424887:web:f814356d70de77cedde272",
  measurementId: "G-K5M6E8XF6B",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
