// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo3b0TkYrcP4c7Ghm7K_p2fpSLKTOP-aE",
  authDomain: "online-polliing-survey.firebaseapp.com",
  projectId: "online-polliing-survey",
  storageBucket: "online-polliing-survey.appspot.com",
  messagingSenderId: "77081055996",
  appId: "1:77081055996:web:5338d9cafff99eaa963d79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;