import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP1O9wPdT2q6_Ex3OdurSQC3J6J6lzOJQ",
  authDomain: "fir-auth-d0c77.firebaseapp.com",
  projectId: "fir-auth-d0c77",
  storageBucket: "fir-auth-d0c77.appspot.com",
  messagingSenderId: "432759608874",
  appId: "1:432759608874:web:4db8efa252e69680b99553"
};

// Initialize Firebase with your project's configuration
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Export the auth object to use it in other parts of your application
export { auth };
