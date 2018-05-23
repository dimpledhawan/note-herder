import React from 'react'

class NoteList extends React.Component{
    constructor(){
        super();
        this.state = {
          notes: [
            {
              id: 0,
              title: 'Kohlrabi welsh',
              body: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.'
            },
            {
              id: 1,
              title: 'Dandelion cucumber',
              body: 'Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.'
            },
            {
              id:2,
              title: 'Prairie turnip',
              body: 'Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.'
            }
          ]
        }
    }

    handelClick(note){
        this.props.callBackParent(note);
    }

    render(){
      return(
        <div className="NoteList">
        <h3 >Notes</h3>
        <ul id="notes">
        {this.state.notes.map(note => {
          return(
            <a key = {this.state.notes.indexOf(note)}>
              <li>
                <div className="note" onClick = {() => this.handelClick(note)}>
                  <div className="note-title">
                    {note.title}
                  </div>
                  <div className="note-body">
                    <p>
                      {note.body}
                    </p>
                  </div>
                </div>
              </li>
            </a>
          )
        })}
        </ul>
        </div>
      )
    }
    
}

export default NoteList;