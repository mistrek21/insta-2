// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZ-CY2qFB_7PLpsPY48IWTq8fGsStm7og",
    authDomain: "instagram-2-22cd1.firebaseapp.com",
    projectId: "instagram-2-22cd1",
    storageBucket: "instagram-2-22cd1.appspot.com",
    messagingSenderId: "1010321025212",
    appId: "1:1010321025212:web:32fd402bae74ad015208b9",
    measurementId: "G-8CZ3G22XYN"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp;
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };