// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTT03lJcp9o0UtpB1pNlKNWbYqIbYzNsc",
    authDomain: "advance-autoparts.firebaseapp.com",
    projectId: "advance-autoparts",
    storageBucket: "advance-autoparts.appspot.com",
    messagingSenderId: "774710930752",
    appId: "1:774710930752:web:9c610cf698263540a45ea5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;