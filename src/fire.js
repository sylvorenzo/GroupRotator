// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGitsl2h1Jddc-mav7FYH4KIC8cZxajf0",
  authDomain: "tshimologong-4e5e8.firebaseapp.com",
  databaseURL: "https://tshimologong-4e5e8-default-rtdb.firebaseio.com",
  projectId: "tshimologong-4e5e8",
  storageBucket: "tshimologong-4e5e8.appspot.com",
  messagingSenderId: "705611094318",
  appId: "1:705611094318:web:7de5853e33fbfe8c3542bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export {database}