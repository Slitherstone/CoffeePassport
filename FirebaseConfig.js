import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
// import firebase from "firebase";

    const firebaseConfig = {

        apiKey: process.env.PUBLIC_APIKEY,
        authDomain: process.env.PUBLIC_AUTHDOMAIN,
        databaseURL: process.env.PUBLIC_DATABASE_URL,
        projectId: "coffee-passport-d270a",
        storageBucket: "coffee-passport-d270a.appspot.com",
        messagingSenderId: "850472412124",
        appId: "1:850472412124:web:b1e5e800fab4e2faf4a519",
        measurementId: "G-MTXLKYMPDS"

        // apiKey: process.env.PUBLIC_APIKEY,
        // authDomain: process.env.PUBLIC_AUTHDOMAIN,
        // databaseURL: process.env.PUBLIC_DATABASE_URL,
        // projectId: process.env.PUBLIC_PROJECT_ID,
        // storageBucket: process.env.PUBLIC_STORAGE_BUCKET,
        // messagingSenderId: process.env.PUBLIC_MESSAGING_SENDER_ID,
        // appId: process.env.PUBLIC_APP_ID,
        // measurementId: process.env.PUBLIC_MEASUREMENT_ID
   
};
        
        const app = initializeApp(firebaseConfig);
        
        export  const db = getDatabase(app);
