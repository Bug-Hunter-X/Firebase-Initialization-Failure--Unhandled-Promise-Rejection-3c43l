import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SEND_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase with error handling
initializeApp(firebaseConfig)
  .catch((error) => {
    console.error("Firebase initialization error:", error);
    // Handle the error appropriately, e.g., display a user-friendly message
  });

const auth = getAuth();

//Example of using additional Firebase services with error handling
//import { getFirestore } from "firebase/firestore";
//const db = getFirestore();

// db.collection('users').get()
//   .then((snapshot) => {
//     // handle successful data retrieval
//   })
//   .catch((error) => {
//     console.error("Error getting documents: ", error);
//   });