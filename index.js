// Import the functions you need from the SDKs you need
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

// Initializing the server
import express from 'express';
import dotenv from 'dotenv';
const app = express();

dotenv.config({ path: './.env'}

)

app.set('view engine', 'hbs')

// Locations of the files to be served
import path from 'path';

const currentModuleURL = new URL(import.meta.url);
const currentDir = path.dirname(currentModuleURL.pathname);
const publicDir = path.join(currentDir);


/*const currentModuleURL = new URL(import.meta.url);
const currentDir = path.dirname(currentModuleURL.pathname);

app.use(express.static(path.join(currentDir, '..')));*/

app.use(express.static(publicDir))


// Each statement represents a different page to load

// Default to login page
app.get("/", (req, res) => {
    res.render("login")
})
app.get("/login", (req, res) => {
    res.render("login")
})
app.get("/register", (req, res) => {
    res.render("register")
})
app.get("/home", (req, res) => {
    res.render("home")
})

app.listen(5000, ()=> {
    console.log("server started on port 5000")
})