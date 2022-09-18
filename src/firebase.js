import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore';
// import { getStorage, uploadBytes } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyARk13S_qeXLVeP_Luy05StF5TMte9i5jE",
  authDomain: "clone-1cf30.firebaseapp.com",
  projectId: "clone-1cf30",
  storageBucket: "clone-1cf30.appspot.com",
  messagingSenderId: "474159569097",
  appId: "1:474159569097:web:d3e3f338f7edfbbe555518",
  measurementId: "G-BG4S16K4RG"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore()
const auth = getAuth()

export { db, auth };