import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB68BWf2t2AF_w9tjdYFDS3ZionRmIQc_4",
  authDomain: "weather-travel-app-1e454.firebaseapp.com",
  databaseURL: "https://weather-travel-app-1e454-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "weather-travel-app-1e454",
  storageBucket: "weather-travel-app-1e454.firebasestorage.app",
  messagingSenderId: "656965556938",
  appId: "1:656965556938:web:54aff13e6340e655523233",
  measurementId: "G-BHE97HTFH5"
};
export const firebaseApp= initializeApp(firebaseConfig)
