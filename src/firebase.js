import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCnksWJLz-od0Zbci4By5FcGjtjLZmqmis",
  authDomain: "todo-app-25f8e.firebaseapp.com",
  projectId: "todo-app-25f8e",
  storageBucket: "todo-app-25f8e.appspot.com",
  messagingSenderId: "828981355876",
  appId: "1:828981355876:web:82520f927b2bbae83a0671",
  measurementId: "G-LPVRQZQWZ0",
});

const db = firebaseApp.firestore();

export default db;
