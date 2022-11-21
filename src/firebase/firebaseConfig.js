import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyClXQvMywBbcYC9R8fsm6oj2nGFxGjBmZY",
  authDomain: "netflix-clone-807d4.firebaseapp.com",
  projectId: "netflix-clone-807d4",
  storageBucket: "netflix-clone-807d4.appspot.com",
  messagingSenderId: "951264305348",
  appId: "1:951264305348:web:c8377bcc13a59a7d846991",
  measurementId: "G-FSR1T8F6BF",
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
