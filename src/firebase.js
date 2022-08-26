import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAYg3WouGkMXuDAlIohnZpksJiYOTr8hts",
    authDomain: "todo-a0311.firebaseapp.com",
    projectId: "todo-a0311",
    storageBucket: "todo-a0311.appspot.com",
    messagingSenderId: "188600809158",
    appId: "1:188600809158:web:4ae09847ab817d3dd989c7",
    measurementId: "G-59RVX2N17N"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};