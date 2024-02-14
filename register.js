import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCm8KbBhLf9oyRoXYTuZMDqtlQyO9k7RUg",
    authDomain: "coc-app-c7033.firebaseapp.com",
    databaseURL: "https://coc-app-c7033-default-rtdb.firebaseio.com",
    projectId: "coc-app-c7033",
    storageBucket: "coc-app-c7033.appspot.com",
    messagingSenderId: "107535379943",
    appId: "1:107535379943:web:2c80c94c2802e231046142",
    measurementId: "G-9XM0215LYM"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getFirestore(firebase);

const regButton = document.getElementById("reg_button");

// Add the user to firebase
regButton.onclick = async function () {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    import {collection, addDoc} from "firebase/firestore";

    try {
        const docRef = await addDoc(collection(db, "users"), {
            username: username,
            email: email,
            password: password
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};
