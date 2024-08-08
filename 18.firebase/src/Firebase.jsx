import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDLg4Qs5HLZ3UZsRkOC3V19076f9T8uJSo",
    authDomain: "fir-education-bd51a.firebaseapp.com",
    projectId: "fir-education-bd51a",
    storageBucket: "fir-education-bd51a.appspot.com",
    messagingSenderId: "100527389987",
    appId: "1:100527389987:web:e4e446670046ce9ae1a096"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
