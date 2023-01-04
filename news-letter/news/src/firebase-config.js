import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD4tKl4jeYPfkbEBn3TLe5t9E0JakCFn_o",
    authDomain:"newsletter-6d479.firebaseapp.com",
    projectId:"newsletter-6d479",
    storageBucket:"newsletter-6d479.appspot.com",
    messagingSenderId:"316058558288",
    appId:"1:316058558288:web:671a0299e7aa59c83a21655"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

