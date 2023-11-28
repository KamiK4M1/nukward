// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVhuxgs2Ddzj4g_gaZQ775d08c6dWHUnk",
  authDomain: "nukward.firebaseapp.com",
  projectId: "nukward",
  storageBucket: "nukward.appspot.com",
  messagingSenderId: "322471168945",
  appId: "1:322471168945:web:9d18e6a751eff257eb8b90"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };