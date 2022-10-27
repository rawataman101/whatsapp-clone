import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8driGZxiFx5NUNUvTzzl7rRSgI6Ynj-4",
  authDomain: "whatsapp-clone-65467.firebaseapp.com",
  projectId: "whatsapp-clone-65467",
  storageBucket: "whatsapp-clone-65467.appspot.com",
  messagingSenderId: "860088450661",
  appId: "1:860088450661:web:9771fc82ba3c49aed5d08c",
  measurementId: "G-SH8T7WWTTD",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
