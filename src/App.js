import React, { Component } from 'react'

import './App.css'
import { auth } from './firebase'
import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
  state = {
    uid: null,
  }

  handleAuth = () => {
    this.setState({ uid: 'dimple' })
  }

  signedIn = () => {
    return this.state.uid
  }

  signOut = () => {
    this.setState({ uid: null })
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if(user) {
        this.setState({})
      }
    })
  }

  render() {
    return (
      <div className="App">
        {
          this.signedIn()
            ? <Main signOut={this.signOut} />
            : <SignIn handleAuth={this.handleAuth} />
        }
      </div>
    )
  }
}

export default App
