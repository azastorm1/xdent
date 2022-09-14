import * as firebase from "firebase/app";
import "firebase/auth";

const config = firebase.initializeApp({
  apiKey: "AIzaSyAUSyOSxCu7jAAuW2dhbRQxem65v9JDsU4",
  authDomain: "xdentxr.firebaseapp.com",
  projectId: "xdentxr",
  storageBucket: "xdentxr.appspot.com",
  messagingSenderId: "837449964048",
  appId: "1:837449964048:web:9770afb377c1ca67254895",
  measurementId: "G-JRQX05H7DB",
});

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default config;
