import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "logincart-81261.firebaseapp.com",
  projectId: "logincart-81261",
  storageBucket: "logincart-81261.firebasestorage.app",
  messagingSenderId: "305691632824",
  appId: "1:305691632824:web:3831801a42a6f2d887404d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}