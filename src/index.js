import ReactDOM from 'react-dom';
import React, { useState, useEffect} from 'react'
import noteService from './services/notes'
import './index.css'

const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'make not important' : 'make important'
  
  return  (<li>
  {note.content} 
  <button onClick={toggleImportance}>{label}</button>
</li>)
}
const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState('some error happened...')

  const hook = () => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }


  useEffect(hook,[]) // dos parametros uno es la funcion, la otra es la cantidad de veces que queres
                    //que sea renderizado
                    
const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="error">
      {message}
    </div>
  )
}

const toggleImportanceOf = id => {
  const url = `http://localhost:3001/api/notes/${id}`
  const note = notes.find(n => n.id === id)
  const changedNote = { ...note, important: !note.important }
  //En la práctica, {... note} crea un nuevo objeto con copias de todas las propiedades del objeto note

  noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      setErrorMessage(
        `Note '${note.content}' was already removed from server`
      )
      setTimeout(() => { //te muestra cuanto tiempo aparece el mensaje xdxdxdxd
        setErrorMessage(null)
      }, 5000)
}
                  

  console.log('render', notes.length, 'notes')
  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

    const addNote = event => {
      event.preventDefault()
      const noteObject = {
        content: newNote,
        date: new Date(),
        important: Math.random() < 0.5,
      }
    
      noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
    }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' } 
        </button>
      </div>
      <ul>
        {notesToShow.map((note,i) =>   
          <Note 
            key={i} 
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)} />
        )}
      </ul>
      <form onSubmit={addNote}> 
        <input 
          value={newNote} 
          onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>   
    </div>
  )

}
ReactDOM.render(<App />, document.getElementById('root'))