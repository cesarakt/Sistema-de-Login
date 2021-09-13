import firebase from 'firebase/app';

import "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC9viHDmgH0m7_DEmPVk-kIpAbY8IZ7hHw",
    authDomain: "meuapp-3c819.firebaseapp.com",
    databaseURL: "https://meuapp-3c819-default-rtdb.firebaseio.com",
    projectId: "meuapp-3c819",
    storageBucket: "meuapp-3c819.appspot.com",
    messagingSenderId: "315430086260",
    appId: "1:315430086260:web:2a1dc4c0a52b4bd5101321",
    measurementId: "G-W8BY6MPCYV"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;