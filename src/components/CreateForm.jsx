import React, {useState} from 'react'

function CreateForm(){

    const [note, setNote] = useState({title: "", content: ""})

    function handleChange(event){
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
              ...prevNote,
              [name]: value
            };
          });
    }

    function handleSubmit(event){

    }
    

    return (<form action="" class="note">
    <label>Title</label> <br/>
    <input onChange={handleChange} type="text" name="title" value={note.title} placeholder="Title"  /> <br/>
    <label>Content</label>
    <textarea onChange={handleChange} name="content" id="" cols="20" rows="10" value={note.content} placeholder="Enter your desciption" ></textarea> <br/>
    <button onClick={handleSubmit}>Add</button>
    </form>);
}

export default CreateForm;