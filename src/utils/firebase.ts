// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIaulTQE7ty1-o6JLR9tP7e6gDcitd2QM",
  authDomain: "bingebot-f91a3.firebaseapp.com",
  projectId: "bingebot-f91a3",
  storageBucket: "bingebot-f91a3.firebasestorage.app",
  messagingSenderId: "919384482436",
  appId: "1:919384482436:web:51b40a179ba92df92658d1",
  measurementId: "G-MLPE516KN9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// @ts-ignore
const analytics = getAnalytics(app);

export const auth = getAuth();
