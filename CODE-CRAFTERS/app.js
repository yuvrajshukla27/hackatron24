// app.js

// Firebase initialization
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";

// Firebase config already in 'firebase-config.js'
const auth = getAuth();

// Google Sign In
document.getElementById('google-sign-in-btn').addEventListener('click', function () {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      alert("Signed in as " + result.user.displayName);
      // Redirect or update UI after sign-in
    })
    .catch((error) => {
      console.error("Error signing in with Google: ", error);
    });
});

// Email Sign In
document.getElementById('email-sign-in-btn').addEventListener('click', function () {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Signed in as " + userCredential.user.email);
      // Redirect or update UI after sign-in
    })
    .catch((error) => {
      console.error("Error signing in with Email: ", error);
    });
});
