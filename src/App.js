import React, { Component } from 'react'

import './App.css'
import firebase, { auth, db } from './firebase'
import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
  constructor() {
    super()

    this.state = {
      uid: null,
      user: null
    }

    this.handleAuth = this.handleAuth.bind(this);
    // console.log(db.ref('notes'))
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.handleAuth(user)
        // this.setState(() => ({ user }))
      } else {
        this.handleUnAuth();
        // this.signOut()
        // this.setState(() => ({ user: null }))
      }
      // console.log(this.state)
      this.setState({
        uid: JSON.parse(localStorage.getItem('uid'))
      })
    })
  }

  handleAuth = (user) => {
    this.setState({ uid: user.uid })
    window.localStorage.setItem('uid', JSON.stringify(this.state.uid));
  }

  handleUnAuth = () => {
    this.setState({ uid: null });
    window.localStorage.setItem('uid', JSON.stringify(this.state.uid));
  }

  saveNote = () => {
    const userID = auth.uid
    const notesRef = db.ref('notes');
    // debugger
    const note = {
      user: this.state.user,
      title: this.state.title,
      body: this.state.body
    }
    notesRef.push(note);
    this.setState({
      uid: '',
      user: ''
    });
  }

  removeNote = (note) => {
    const notes = {...this.state.notes}
    notes[note.id] = null

    this.setState({ notes })
    this.props.history.replace('/notes')
  }

  signedIn = () => {
    return this.state.uid
  }

  signOut = () => {
    // this.saveNote()
    this.setState({ uid: null })
    auth.signOut()
  }

  render() {
    return (
      <div className="App">

        {
          this.signedIn()
            ? <Main 
                signOut={this.signOut} 
                // saveNote={this.saveNote}
                // removeNote={this.removeNote} 
                uid = {this.state.uid}
              />
            : <SignIn handleAuth={this.handleAuth} />
        }
      </div>
    )
  }
}

export default App