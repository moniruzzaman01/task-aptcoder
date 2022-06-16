// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl1zdJTecIarQolJ2T8qzhVFckxD7oSyc",
  authDomain: "task-aptcoder.firebaseapp.com",
  projectId: "task-aptcoder",
  storageBucket: "task-aptcoder.appspot.com",
  messagingSenderId: "99791226712",
  appId: "1:99791226712:web:16ccbede0a8cfef55c472d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
