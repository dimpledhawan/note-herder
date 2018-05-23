import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends React.Component {
  constructor(){
      super();
      this.state = {
          note: {
            title: 'Title your note',
            body: '',
          }
      }
  }
  
  myCallback = (data) => {
      let tempNote = Object.assign({}, this.state.note);
      tempNote.title = data.title;
      tempNote.body = data.body;

      this.setState({
          note: tempNote,
      })
  }
  
  render(){
      return(
          <div className = "Main" style = {style}>
              <Sidebar />
              <NoteList callBackParent = {this.myCallback}/>
              <NoteForm note = {this.state.note}/>
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
