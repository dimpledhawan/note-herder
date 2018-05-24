import Rebase from 're-base';
import firebase from 'firebase';
// import firebase from 'firebase'
import database from 'firebase/database'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBewl4eRmnV_Ko18_BZNhJIKnDJWdqBIvc",
    authDomain: "note-herder.firebaseapp.com",
    databaseURL: "https://note-herder.firebaseio.com",
    projectId: "note-herder",
    storageBucket: "note-herder.appspot.com",
    messagingSenderId: "294646778492"
  });

const db = firebase.database(app);

export const githubProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase