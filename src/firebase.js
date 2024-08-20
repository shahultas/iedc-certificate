// src/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzeYuqF8PRc01rJ2TjNaMrzMtoB8DnVqM",
  authDomain: "file-upload-12bb9.firebaseapp.com",
  projectId: "file-upload-12bb9",
  storageBucket: "file-upload-12bb9.appspot.com",
  messagingSenderId: "64640652437",
  appId: "1:64640652437:web:60865be911f7d064f4b79c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
