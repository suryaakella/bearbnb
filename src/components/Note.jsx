import React from 'react'


function note(props){

    function handleClick(event){
        props.onDel(props.id)
        console.log("clicked")
    }
    
return (<div className = "note">
    <img src={props.url} alt="image" style={{height:"200px", width:"100%"}} />
    <h1>{props.title} <span class="location" style={{color: "#f7a440", marginLeft:"20px", marginRight:"20px"}}> ·  {props.location}</span></h1>
    <h6 class="pricing" style={{marginRight:"50", marginLeft:"0px"}}><strong>{props.pricing}</strong></h6>
    <p>{props.content}</p> 
    <button class="note-delete" style={{marginLeft:"80%"}} onClick={handleClick}> 
    <img src="https://img.icons8.com/plasticine/100/000000/delete-forever.png" class="dustbin"></img> 
    </button>
</div>);
}

export default note;