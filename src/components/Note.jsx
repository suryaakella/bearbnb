import React from 'react'


function note(props){



    function handleClick(event){
        props.onDel(props.id)
        console.log("clicked")
    }
    

return (<div className = "note"><h1>{props.title}</h1><p>{props.content}</p> 
    <button onClick={handleClick}>Delete</button>
</div>);
}

export default note;