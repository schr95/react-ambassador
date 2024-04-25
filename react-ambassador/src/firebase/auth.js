import { auth } from "./firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  GoogleAuthProvider,
  signInWithPopup,
  getRedirectResult
} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const authStateChanged = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = async (email, password) => {
  const userCredentials = await signInWithEmailAndPassword(auth, email, password);
  return userCredentials;
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const userCredentials = await signInWithPopup(auth, provider);
  return userCredentials;
};

export const doSignOut = () => {
  return auth.signOut();
};

export const RedirectResult = () => {
  const result = getRedirectResult(auth);
  return result;
};

export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password) => {
  return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};