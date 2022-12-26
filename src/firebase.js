import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVhAtvEUatjtprwwLoWTC6Av7LrtqyD3w",
  authDomain: "react-admin-app-3373e.firebaseapp.com",
  projectId: "react-admin-app-3373e",
  storageBucket: "react-admin-app-3373e.appspot.com",
  messagingSenderId: "1044944916349",
  appId: "1:1044944916349:web:e934edaacf677973918614"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);