import firebase from "firebase/app";
// authentication module for firebase
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

// exporting a variable for authentication
export const auth = app.auth();
export default app;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCP1O9wPdT2q6_Ex3OdurSQC3J6J6lzOJQ",
//   authDomain: "fir-auth-d0c77.firebaseapp.com",
//   projectId: "fir-auth-d0c77",
//   storageBucket: "fir-auth-d0c77.appspot.com",
//   messagingSenderId: "432759608874",
//   appId: "1:432759608874:web:4db8efa252e69680b99553"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
