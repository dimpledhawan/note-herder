import React from 'react'
import './NoteForm.css'

class NoteForm extends React.Component {
  render() {
    return (
      <div className="NoteForm">
        <div className="form-actions">
          <button type="button">
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
        <form>
          <p>
            <input type="text" name="title" placeholder= {this.props.note.title} />
          </p>
          <textarea name="body" value = {this.props.note.body}></textarea>
        </form>
      </div>
    )
  }
}

export default NoteForm;