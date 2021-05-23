import React, {useState} from 'react'

function CreateForm(props){

    const [note, setNote] = useState({title: "", content: "", file: null, pricing: "", location: ""})

    function handlefileChange(event){
      const {name, file} = event.target
      setNote({
        file: URL.createObjectURL(event.target.files[0])
      })
    }

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
      console.log(event.target.value)
        props.onAdd(note);
        setNote({
          title: "",
          content: "",
          file:null,
          pricing: "",
          location: ""
        });
        event.preventDefault();
    }
    
    return (<form action="" class="note">
    <label> Select File</label>
    <div className="input-container" style={{height:"50px", weigth:"100px"}}>
    <input class="form-file form-control" onChange={handlefileChange} placeholder="Drag and Drop " name="url" type="file" accept=".jpg, .jpeg, .png" value={note.url}/>
    </div>
    <input class="form-title form-control" onChange={handleChange} type="text" name="title" value={note.title} placeholder="Title"  /> <br/>
    <textarea class="form-textarea form-control" onChange={handleChange} name="content" cols="20" rows="10" value={note.content} placeholder="Enter your desciption" ></textarea> <br/>
    <label>Location</label>
    <input class="form-pricing form-control" onChange={handleChange} type="text" name="location" value={note.location} placeholder="Location"  /> <br/>
    <label>Pricing</label>
    <input class="form-pricing form-control" onChange={handleChange} type="text" name="pricing" value={note.pricing} placeholder="Pricing"  /> <br/>  
    <button class="btn btn-lg btn-primary add-button" onClick={handleSubmit}>Create new Adventure...</button>
    </form>);
}

export default CreateForm;