//* Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

//* Add the Web App's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWzrPJNtwjvrrkjM7vxsKDDH2d-SZq-k4",
  authDomain: "adsjobtoken-3f26a.firebaseapp.com",
  projectId: "adsjobtoken-3f26a",
  storageBucket: "adsjobtoken-3f26a.firebasestorage.app",
  messagingSenderId: "631952512124",
  appId: "1:631952512124:web:9451758e188cef58cc65f9",
  measurementId: "G-N2P2DNN0BE",
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
