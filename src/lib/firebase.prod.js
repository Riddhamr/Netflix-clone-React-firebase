import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from "../seed";

const config = {
    apiKey: "AIzaSyDgadhvZI9RMWUYednJBKnUv0s3FqRH7yI",
    authDomain: "netflix-sr06.firebaseapp.com",
    databaseURL: "https://netflix-sr06.firebaseio.com",
    projectId: "netflix-sr06",
    storageBucket: "netflix-sr06.appspot.com",
    messagingSenderId: "744424834727",
    appId: "1:744424834727:web:073c35a2a07a83d54b7d82",
    measurementId: "G-V7REBVCSYZ",
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
