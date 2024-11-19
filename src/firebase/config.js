//* Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

//* Add the Web App's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmPoOsgn_XMOlzOXzKZVLvRpZ_gTtchhE",
  authDomain: "xnot-de479.firebaseapp.com",
  projectId: "xnot-de479",
  storageBucket: "xnot-de479.firebasestorage.app",
  messagingSenderId: "825428833561",
  appId: "1:825428833561:web:03dae3a5e74bf62d9b0188",
  measurementId: "G-80CKSG5PNX",
};

//* Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

//* Initialize Firebase Auth and set persistence
const auth = getAuth(firebase_app);
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Session persistence set to LOCAL");
  })
  .catch((error) => {
    console.error("Failed to set session persistence:", error);
  });

export { auth };
export default firebase_app; 
