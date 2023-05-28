import { createApp } from "vue";
import firebase from "firebase";
import App from "./App.vue";
import router from "./router";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBgZ971qKjkZnX3T6qq1-w-ndtiT3hRI3o",
    authDomain: "northcloud-fe0da.firebaseapp.com",
    databaseURL:
        "https://northcloud-fe0da-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "northcloud-fe0da",
    storageBucket: "northcloud-fe0da.appspot.com",
    messagingSenderId: "431979193145",
    appId: "1:431979193145:web:1b512a1cea17adb270fee8",
    measurementId: "G-YYTR7GPCC1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App)
    .use(router)
    .mount("#app");
