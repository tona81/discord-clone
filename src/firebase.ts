import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCD-fIKqVswDdb1tj5OB2nZVcCglE5SpaE",
  authDomain: "discord-clone-b30e1.firebaseapp.com",
  projectId: "discord-clone-b30e1",
  storageBucket: "discord-clone-b30e1.appspot.com",
  messagingSenderId: "903009372490",
  appId: "1:903009372490:web:8f32e4d9911e2a813819b3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
