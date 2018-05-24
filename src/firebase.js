import Rebase from 're-base';
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBewl4eRmnV_Ko18_BZNhJIKnDJWdqBIvc",
    authDomain: "note-herder.firebaseapp.com",
    databaseURL: "https://note-herder.firebaseio.com",
    projectId: "note-herder",
    storageBucket: "note-herder.appspot.com",
    messagingSenderId: "294646778492"
  };

  const app = firebase.initializeApp(config)
  const db = firebase.database(app)
  
  export const githubProvider = new firebase.auth.GithubAuthProvider()
  export const googleProvider = new firebase.auth.GoogleAuthProvider()
  export const auth = app.auth()
  
  export default Rebase.createClass(db)