import firebase from "firebase/app"; //firebase
import "firebase/database"; //firebase database

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCIoww7ZIT2E5FUwCZKbEMjR0jMI03nnuM",
  authDomain: "project-five-fe76a.firebaseapp.com",
  databaseURL: "https://project-five-fe76a.firebaseio.com",
  projectId: "project-five-fe76a",
  storageBucket: "project-five-fe76a.appspot.com",
  messagingSenderId: "1084555359281",
  appId: "1:1084555359281:web:680fc971ed08ae110a9110",
  measurementId: "G-0200HKV2J3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
