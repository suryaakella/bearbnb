import React,{useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
// import contacts from '../contacts'
import Create from './CreateForm'


function App() {

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
          });    }


          
    return  (<div>
        <Header />
        <Create onAdd={addNote} />
        {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}
        <Footer />
  </div>)
}

export default App;