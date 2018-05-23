import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

import './Main.css'

class Main extends React.Component {
  constructor(){
      super();
      this.state = {
          noteTarget: {
            title: 'Title your note',
            body: '',
          }
      }
  }
  
  myCallback = (prop) => {
    this.setState({
        noteTarget: {
            title: prop.title,
            body: prop.body
        }
    })
  }
  
  render(){
      return(
          <div className = "Main" style = {style}>
              <Sidebar />
              <NoteList callBackParent = {this.myCallback}/>
              <NoteForm note = {this.state.noteTarget}/>
          </div>
      );
  }
 
};

const style = {
  display: 'flex',
  height: '100vh',
  alignItems: 'stretch',
}

export default Main
