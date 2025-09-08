import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVzLieeRTHgowdyR7ZZpYFeUY_DO6Fbnc",
  authDomain: "grocerystore-a30a2.firebaseapp.com",
  projectId: "grocerystore-a30a2",
  storageBucket: "grocerystore-a30a2.appspot.com",
  messagingSenderId: "188715688941",
  appId: "project:188715688941" // Replace with actual App ID if needed
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
