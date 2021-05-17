import React, {useState} from 'react'
import CreateForm from './CreateForm'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'

function App(){
    
    const [notes, setNotes] = useState([]);
    
    function addnote(item){
        // console.log(item);
        setNotes(prevValue => {
            return [...prevValue, item];
        })
    }
    
    function publish(item, index){
        return (
            <Note id={index} key={index} onDel={deletenote} title={item.title} content={item.content}/>
        );
    }

    function deletenote(id){
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
              return index !== id;
            });
          });
    }
    
    return (
        <div>
        <Header />
        <CreateForm onAdd={addnote} />
        {notes.map(publish)}
        <Footer />
        </div>
    );
} 

export default App;