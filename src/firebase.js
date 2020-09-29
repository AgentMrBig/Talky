import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB46QUIqvU2uAsmba6sJh2x14u2yzVFR90",
    authDomain: "talky-c4054.firebaseapp.com",
    databaseURL: "https://talky-c4054.firebaseio.com",
    projectId: "talky-c4054",
    storageBucket: "talky-c4054.appspot.com",
    messagingSenderId: "695837972579",
    appId: "1:695837972579:web:c05f2875229fc6601ac056",
    measurementId: "G-LCFLCN3V9J"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();