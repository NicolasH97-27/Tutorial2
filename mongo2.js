const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0.0wyxs.mongodb.net/note-app?retryWrites=true&w=majority`
  
mongoose.connect(url)

const noteSchema = new mongoose.Schema({ //aca se muestra el esquema de los datos que se va a mandar
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

/*
Los objetos se recuperan de la base de datos con el método find del modelo Note
      Se puede hacer esto (si queres algo especifico):
Note.find({ important: true }).then(result => {
  // ...
})
*/
Note.find({}).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
})

/*
const note = new Note({
  content: 'HTML is Easy',
  date: new Date(),
  important: true,
})
note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
  //Guardar el objeto en la base de datos ocurre con el método save,
  // que se puede proporcionar con un controlador de eventos con el método then:
})
*/