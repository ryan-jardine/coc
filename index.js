// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getDatabase } = require( "firebase/database");
const firebaseConfig = {
    apiKey: "AIzaSyCm8KbBhLf9oyRoXYTuZMDqtlQyO9k7RUg",
    authDomain: "coc-app-c7033.firebaseapp.com",
    projectId: "coc-app-c7033",
    storageBucket: "coc-app-c7033.appspot.com",
    messagingSenderId: "107535379943",
    appId: "1:107535379943:web:2c80c94c2802e231046142",
    measurementId: "G-9XM0215LYM",
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://coc-app-c7033-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);


// Initializing the server
const express = require('express');
const dotenv = require('dotenv')
const app = express();

dotenv.config({ path: './.env'}

)

app.set('view engine', 'hbs')

// Locations of the files to be served
const path = require("path")

const publicDir = path.join(__dirname, './public')

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