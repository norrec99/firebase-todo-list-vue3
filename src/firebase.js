import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdcepm2Rgx_zE_AYTZnRQ60h9ZOSpEiXc",
  authDomain: "vue-todo-list-563b8.firebaseapp.com",
  projectId: "vue-todo-list-563b8",
  storageBucket: "vue-todo-list-563b8.appspot.com",
  messagingSenderId: "1065532021540",
  appId: "1:1065532021540:web:4edbfac8966bb48c4971b1",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const todos = db.collection("tasks");
