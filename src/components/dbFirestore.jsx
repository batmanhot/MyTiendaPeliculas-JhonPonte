
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAnlNiik_HXee0uYZ7pO_RoUd-xq5cftfk",
  authDomain: "glowing-cooler-316520.firebaseapp.com",
  projectId: "glowing-cooler-316520",
  storageBucket: "glowing-cooler-316520.appspot.com",
  messagingSenderId: "340931326363",
  appId: "1:340931326363:web:50360523fdd772c925b13e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);