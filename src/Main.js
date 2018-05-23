import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

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
  
  myCallback = (data) => {
      let temp = Object.assign({}, this.state.noteTarget);
      temp.title = data.title;
      temp.body = data.body;

      this.setState({
        noteTarget: temp,
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
