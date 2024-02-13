// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getDatabase } = require( "firebase/database");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

const express = require('express');
const dotenv = require('dotenv')

const req = express();
dotenv.config({ path: './.env'}

)

req.set('view engine', 'hbs')
const path = require("path")

const publicDir = path.join(__dirname, './public')

req.use(express.static(publicDir))
req.get("/", (req, res) => {
    res.render("index")
})

req.listen(5000, ()=> {
    console.log("server started on port 5000")
})