// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI532BEBC_wMJfMwJUyriEjjRmgmIqHSs",
  authDomain: "foodreviewappdb.firebaseapp.com",
  databaseURL: "https://foodreviewappdb-default-rtdb.firebaseio.com",
  projectId: "foodreviewappdb",
  storageBucket: "foodreviewappdb.appspot.com",
  messagingSenderId: "216932637756",
  appId: "1:216932637756:web:0f2bfda67f2139d3933739"
};






// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const storage = getStorage(app);
export const postsRef = ref(database, "posts");
//export const postsRef = ref(storage, "posts");
