import firebase from "firebase"

var config = {
    apiKey: "AIzaSyBewl4eRmnV_Ko18_BZNhJIKnDJWdqBIvc",
    authDomain: "note-herder.firebaseapp.com",
    databaseURL: "https://note-herder.firebaseio.com",
    projectId: "note-herder",
    storageBucket: "note-herder.appspot.com",
    messagingSenderId: "294646778492"
  };
  firebase.initializeApp(config);

  export default firebase