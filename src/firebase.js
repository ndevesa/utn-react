// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpO29nwgTfw5fJxFVIeoiD8I8wSMY_BN8",
  authDomain: "ecommerce-utn-nd.firebaseapp.com",
  projectId: "ecommerce-utn-nd",
  storageBucket: "ecommerce-utn-nd.appspot.com",
  messagingSenderId: "493873879594",
  appId: "1:493873879594:web:19da06a79ff02997554153",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//Persistencia de la sesion
setPersistence(auth, browserLocalPersistence)
  .then(console.log("Auth persistence set to local storage."))
  .catch((err) => {
    console.error("Persistence error: ", err);
  });
