import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {

  const bornYear = () => new Date().getFullYear() - props.age

  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

import React from 'react'
import ReactDOM from 'react-dom'


const App = (props) => {
  const { counter } = props
  return (
    <div>{counter}</div>
  )
}

let counter = 1

const refresh = () => {
  ReactDOM.render(<App counter={counter} />, 
  document.getElementById('root'))
}

setInterval(() => {
  refresh()
  counter += 1
}, 1000)
//en react el atributo se llama classname en vez de class para el css

/*                        ************************
                          ******OTRO PROGRAMA*****
                          ************************
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // LA APP ES UN COMPONENTE 
  // ESTO PIDE RENDERIZAR 
  const [ counter, setCounter ] = useState(0) 
  // Y ESTO PIDE RENDERIZAR OTRA VEZ CADA CIERTO TIEMPO (1000 MILISEGUNDOS)
  // EL SET CONTER ES EL UNICO QUE PUEDE CAMBIAR EL COUNTER
  setTimeout(
    () => setCounter(counter + 1),
    1000
  )


  return (
    <div>{counter}</div>
  )
}

ReactDO.render(
  <App />, 
  document.getElementById('root')
)
***************************************************************************/
/*                  now the goods partes "BOTONES"

const App = () => {
  const [ counter, setCounter ] = useState(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>
      <button onClick={() => setCounter(0)}> 
        zero
      </button>
    </div>
  )
}

//otra manera

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  
  const setToZero = () => setCounter(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setToZero}>
        zero
      </button>
    </div>
  )
}
*************************************************************************
                              OTRA FORMA DE BOTONES con componentes

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />     
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />           
    </div>
  )
}
*****************************************************
                      VARIOS BOTONES QUE ACTIVAN DIFERENTES ESTADOS


const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  return (
    <div>
      {left}
      <button onClick={() => setLeft(left + 1)}>
        left
      </button>
      <button onClick={() => setRight(right + 1)}>
        right
      </button>
      {right}
    </div>
  )
}
****************************************************************************************
const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })
  
  const handleLeftClick = () => {
    const newClicks = { 
      left: clicks.left + 1, 
      right: clicks.right 
    }
    setClicks(newClicks) //setClicks los setea es una funcion de react o js anda saber
  }
  
  const handleRightClick = () => {
    const newClicks = { 
      left: clicks.left, 
      right: clicks.right + 1 
    }
    setClicks(newClicks)
  }
  
  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  )
}

*******************************************************************
                  3 "estados" pero uno es array
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (        //el join los esta imprimiendo ahre xd pero si
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}
*******************************************************************************
                          LO MISMO DE ARRIBA PERO MAS LINDO

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}
************************************************************
************************************************************
                          para depurar: console.log()
                          
  const Button = (props) => { 
  console.log(props)
  const { onClick, text } = props
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}
********************************************************************
                        controlar eventos sobre un elemento solo 
                        
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = newValue => {
    setValue(newValue)
  }

  return (
    <div class="menu"> m
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}


ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
hasta aca
se uso ese render y esos importaciones
***********************************************************************
                                MATRICES

import React from 'react'
import ReactDOM from 'react-dom'

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true,
  },
]

const App = props => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(
          note => 
            <li key={note.id}>{note.content}</li>)} //key es importante ni idea porque
      </ul>
    </div>
  )
}

ReactDOM.render(<App notes={notes} />, document.getElementById('root'))
***********************************************************************
                      con esto podes escribir nuevas notas en un formulario

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true,
  },
]
const Note = ({ note }) => {
  return <li>{note.content}</li>
}

const App = (props) => {
  const [notes, setNotes] = useState(props.notes) //se declara un valor y un estado(una funcion segun entiendo)
  const [newNote, setNewNote] = useState(
    'a new note...'
  ) // oki duki, aca se viene la new note

  const addNote = (event) => {
    event.preventDefault()//previene que el formulario haga algo por defoult
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
  
    setNotes(notes.concat(noteObject)) //esta funcion ya esta declarada arriba no ves? 
    setNewNote('') //aca pasa la magia,aca es donde cambia
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}> 
        <input 
          value={newNote} //aca uso el objeto ya declarado arriba
          onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>   
    </div>
  )
}
-*********************************************************
const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true,
  },
]
const Note = ({ note }) => {
  return <li>{note.content}</li>
}

const App = (props) => {
  const [notes, setNotes] = useState(props.notes) 
  const [newNote, setNewNote] = useState() 
  const [showAll, setShowAll] = useState(true)//acordate siempre la funcion useState te devuelve
                                              //una variable y una funcion para alterarla

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
  
    setNotes(notes.concat(noteObject)) 
    setNewNote('') 
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  return (// 
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' } //aca consulta que poner, cambia el boton 
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>   //aca usa notesToShow y los muestra 
          <Note key={note.id} note={note} />
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
*****************************************************************************
                  SERVER 

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'

axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data
  ReactDOM.render(
    <App notes={notes} />,
    document.getElementById('root')
  )
}
)

                          envios de datos a al server de json xd
import ReactDOM from 'react-dom';
import React, { useState, useEffect} from 'react'
import axios from 'axios'

const Note = ({ note }) => {
  return <li>{note.content}</li>
}
const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }


  useEffect(hook,[]) // dos parametros uno es la funcion, la otra es la cantidad de veces que queres
                    //que sea renderizado


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
    
      axios
        .post('http://localhost:3001/notes', noteObject) //el metodo post manda los datos al servidor wow
        .then(response => {
          console.log(response)
          setNotes(notes.concat(response.data)) //el metodo concat genera una nueva lista
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
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' } 
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>   
          <Note key={note.id} note={note} />
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
*****************************************************************************************
aca se uso 2 js primero:
import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => {
      return response.data
    })
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
  }
  
  const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
  }
  
  export default { 
    getAll: getAll, 
    create: create, //Dado que los nombres de las claves y las variables asignadas son los mismos, 
                    //podemos escribir la definición del objeto con una sintaxis más compacta: {getAll,create,update}
    update: update 
  }

segundo:
import ReactDOM from 'react-dom';
import React, { useState, useEffect} from 'react'
import axios from 'axios'
import noteService from './services/notes'

const Note = ({ note }) => {
  return <li>{note.content}</li>
}
const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }


  useEffect(hook,[]) // dos parametros uno es la funcion, la otra es la cantidad de veces que queres
                    //que sea renderizado

const toggleImportanceOf = id => {
  const url = `http://localhost:3001/notes/${id}`
  const note = notes.find(n => n.id === id)
  const changedNote = { ...note, important: !note.important }
  //En la práctica, {... note} crea un nuevo objeto con copias de todas las propiedades del objeto note

  noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
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
********************************************************************************
LO MISMO QUE ARRIBA PERO ESTA VEZ AGARRA EL ERROR QUE PRODUCE SI SE CREA UNA NOTA RARA NO ENTENDI XD CON 
EL METODO CATCH

import ReactDOM from 'react-dom';
import React, { useState, useEffect} from 'react'
import axios from 'axios'
import noteService from './services/notes'

const Note = ({ note }) => {
  return <li>{note.content}</li>
}
const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }


  useEffect(hook,[]) // dos parametros uno es la funcion, la otra es la cantidad de veces que queres
                    //que sea renderizado

const toggleImportanceOf = id => {
  const url = `http://localhost:3001/notes/${id}`
  const note = notes.find(n => n.id === id)
  const changedNote = { ...note, important: !note.important }
  //En la práctica, {... note} crea un nuevo objeto con copias de todas las propiedades del objeto note

  noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error => {
        alert(
          `the note '${note.content}' was already deleted from server`
        )
        setNotes(notes.filter(n => n.id !== id))
      })
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
************************************************************
lo mismo que arriba pero ahora tiene un boton que le cambia la importanancia xd
import ReactDOM from 'react-dom';
import React, { useState, useEffect} from 'react'
import noteService from './services/notes'

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

  const hook = () => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }


  useEffect(hook,[]) // dos parametros uno es la funcion, la otra es la cantidad de veces que queres
                    //que sea renderizado

const toggleImportanceOf = id => {
  const url = `http://localhost:3001/notes/${id}`
  const note = notes.find(n => n.id === id)
  const changedNote = { ...note, important: !note.important }
  //En la práctica, {... note} crea un nuevo objeto con copias de todas las propiedades del objeto note

  noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error => {
        alert(
          `the note '${note.content}' was already deleted from server`
        )
        setNotes(notes.filter(n => n.id !== id))
      })
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
*****************************************************************************

ahora para que te aparezca error 
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
  const url = `http://localhost:3001/notes/${id}`
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
****************************************************************************
const Footer = () => {//Los estilos en línea tienen ciertas limitaciones. 
                      //Por ejemplo, las llamadas pseudoclases no se pueden usar directamente.
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }
  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Science, University of Helsinki 2020</em>
    </div>
  )
}
*****************************************************************************
//servidor web :


const http = require('http')
let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true
  }
]
const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })//escribe en formato tipo json
  response.end(JSON.stringify(notes))//aca mas que se pone en formato json
})
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)

//servidor web con express:
const express = require('express')
const app = express()
let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true
  }
]
app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})//con express ya no es necesario un convertidor a objetos json

//aki empece a usar nodemon, cuidado no es chiste tuve varios problemas, como 
//usar el powershell de windows y que se yo
//cuidado con lo que haces cuando se forma el package.json una vez instalado el nodemon
//varias veces consulte
**********************************************************************************

server completo web

const express = require('express')
const app = express()

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2022-01-10T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2022-01-10T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2022-01-10T19:20:14.298Z",
    important: true
  }
]

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
} // esto es medio raro es todo de express parece

app.use(express.json())

app.use(requestLogger)

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
  return maxId + 1
}

app.post('/api/notes', (request, response) => {
  const body = request.body

  if (!body.content) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }

  const note = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: generateId(),
  }

  notes = notes.concat(note)

  response.json(note)
})

app.get('/api/notes', (req, res) => {
  res.json(notes)
})

app.delete('/api/notes/:id', (request, response) => {
  
  //Podemos definir parámetros para rutas en express usando la sintaxis de dos puntos:
  
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})

app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)

  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

//tenes que cerrar y abrir la pagina denuevo para ver los cambios sino no se actualiza

**********************************************************
REST VISUAL ESTUDIO (APRENDE A USARLO)
GET http://localhost:3001/api/notes/ //ESTE ESTA PIDIENDO GET AL HTTP

### // CON ESTO SEPARAS 
POST http://localhost:3001/api/notes/ HTTP/1.1 //Y ESTE POST APRENDE LOS VERBOS DE HTTP
content-type: application/json

{
    "name": "sample",
    "time": "Wed, 21 Oct 2015 18:27:50 GMT"
}

UN EJEERCICIO PIOLA 

const express = require('express')
const app = express()
var morgan = require('morgan')

//SI LO REVISAS CON CALMA Y PASCIENCIA SE VE TRANQUI

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2022-01-10T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2022-01-10T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2022-01-10T19:20:14.298Z",
    important: true
  }
]
//ESTE MORGAN IMPRIME COSAS EN LA TERMINAL, REQ ES LO QUE ESTAS MANDANDO
const funcion = morgan(function (tokens, req, res) {
  const body = req.body
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    'hola el contenido es',
    body.content

  ].join(' ')
})


app.use(funcion)
app.use(express.json())

app.get('/', function (req, res) {
  res.send('hello, world!')
})

app.get('/info', (req, res) => {
  var id = generateId()
  
  res.send('phone has info for '+id+' people <br><br>'+' el tiempo es '+ req.requestTime)
})

const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
  return maxId + 1
}



app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.content) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }

  const note = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: generateId(),
  }

  notes = notes.concat(note)

  response.json(note)
}) 

app.get('/api/persons', (req, res) => {
  
  
  res.json(notes)
})

app.delete('/api/persons/:id', (request, response) => { 
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)

  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

ASI SE USA EL REST 
el archivo es ejemplo.rest

Get http://localhost:3001/api/persons

###
Get http://localhost:3001/api/persons/1

###

DELETE http://localhost:3001/api/persons/3

###

POST http://localhost:3001/api/persons
Content-Type: application/json

{
  "id": 5,
  "content": "HTgrhrhrh    rghrhr  hrhr   easy",
  "date": "2022-01-10T17:30:31.098Z",
  "important": true
}
*/
